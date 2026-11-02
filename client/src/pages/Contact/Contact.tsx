import React, {useCallback, useEffect, useState} from 'react';
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {useMutation, useQuery} from '@tanstack/react-query';
import {getQuestions, sendQuestion} from '../../services/contactService';
import type {ContactFormData, Question, StatusState} from '../../types';

import ContactForm from './ContactForm';
import FAQSection from './FAQSection';
import ContactStatus from './ContactStatus';
import QuickLinks from './QuickLinks';
import styles from '../../styles/Contact/Contact.module.scss';

const ContactContent: React.FC = () => {
    const {executeRecaptcha} = useGoogleReCaptcha();

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<StatusState | null>(null);

    const {data: questions} = useQuery<Question[]>({
        queryKey: ['questions'],
        queryFn: getQuestions,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mutation = useMutation({
        mutationFn: (data: ContactFormData & { recaptcha_token: string }) => sendQuestion(data),
        onSuccess: async (result) => {
            if (result.status) {
                setStatus({type: 'success', msg: 'Xabar muvaffaqiyatli yuborildi!'});
                setFormData({name: '', email: '', message: ''});
            } else {
                setStatus({type: 'danger', msg: result.message || 'Xatolik yuz berdi'});
            }
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || 'Server bilan aloqa uzildi';
            setStatus({type: 'danger', msg: errorMsg});
        }
    });

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            setStatus({type: 'danger', msg: 'Xavfsizlik tizimi yuklanmagan!'});
            return;
        }

        try {
            setStatus({type: 'info', msg: 'Xavfsizlik tekshiruvi ketyapti...'});
            const token = await executeRecaptcha('contact_form');

            if (!token) {
                setStatus({type: 'danger', msg: 'Google reCAPTCHA token bermadi.'});
                return;
            }

            await mutation.mutateAsync({
                ...formData,
                recaptcha_token: token
            });
        } catch (err: any) {
            console.error("Xatolik tafsiloti:", err);
            const msg = err.response?.data?.message || err.message || "Kutilmagan xatolik";
            setStatus({type: 'danger', msg: `Xatolik: ${msg}`});
        }
    }, [executeRecaptcha, formData, mutation]);

    return (
        <section className={styles.contactPageWrapper}>
            <div className="container relative z-10 py-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className={styles.sidebarSticky}>
                            <ContactForm
                                formData={formData}
                                setFormData={setFormData}
                                onSubmit={handleSubmit}
                                isPending={mutation.isPending}
                            />

                            <div className={styles.statusMount}>
                                <ContactStatus status={status}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <FAQSection />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <QuickLinks questionCount={questions?.length || 0} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact: React.FC = () => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            language="uz"
            container={{
                parameters: {
                    badge: 'bottomright',
                    theme: 'dark'
                }
            }}
        >
            <ContactContent/>
        </GoogleReCaptchaProvider>
    );
};

export default Contact;
