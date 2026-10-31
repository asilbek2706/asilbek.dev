import React from 'react';
import type { ContactFormData } from '../../types';
import styles from '../../styles/Contact/ContactForm.module.scss';

interface ContactFormProps {
    formData: ContactFormData;
    setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
    onSubmit: (e: React.FormEvent) => void;
    isPending: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
    formData,
    setFormData,
    onSubmit,
    isPending,
}) => {
    const nameValid = formData.name.trim().length >= 2;

    const emailValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

    const messageValid = formData.message.trim().length >= 10;

    const formValid = nameValid && emailValid && messageValid;

    return (
        <div className={styles.formContainer}>
            <div className={styles.headerSection}>
                <div className={styles.metaBadge}>
                    <span className={styles.dot}></span>
                    <span className={styles.badgeText}>Aloqa Tizimi</span>
                </div>
                <h2 className={styles.title}>SAVOL_YO'LLASH</h2>
            </div>

            <form onSubmit={onSubmit} className={styles.formStack}>
                <div className={styles.inputField}>
                    <label>ISMINGIZ</label>
                    <input
                        type="text"
                        className={`${styles.input} ${
                            formData.name.length > 0 && !nameValid
                                ? styles.inputError
                                : ''
                        }`}
                        value={formData.name}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                        required
                        placeholder="Ismingizni yozing..."
                    />

                    {formData.name.length > 0 && !nameValid && (
                        <small className={styles.validationError}>
                            Ism kamida 2 ta belgi bo'lishi kerak.
                        </small>
                    )}
                </div>

                <div className={styles.inputField}>
                    <label>EMAIL MANZIL</label>
                    <input
                        type="email"
                        className={`${styles.input} ${
                            formData.email.length > 0 && !emailValid
                                ? styles.inputError
                                : ''
                        }`}
                        value={formData.email}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        required
                        placeholder="example@mail.com"
                    />

                    {formData.email.length > 0 && !emailValid && (
                        <small className={styles.validationError}>
                            To'g'ri email manzil kiriting.
                        </small>
                    )}
                </div>

                <div className={styles.inputField}>
                    <label>XABARINGIZ</label>
                    <textarea
                        className={`${styles.input} ${
                            formData.message.length > 0 && !messageValid
                                ? styles.inputError
                                : ''
                        }`}
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                message: e.target.value,
                            }))
                        }
                        required
                        placeholder="Savolingiz yoki fikringizni qoldiring..."
                    ></textarea>

                    {formData.message.length > 0 && !messageValid && (
                        <small className={styles.validationError}>
                            Xabar kamida 10 ta belgi bo'lishi kerak.
                        </small>
                    )}
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isPending || !formValid}
                >
                    <span className={styles.btnText}>
                        {isPending ? 'YUBORILMOQDA...' : 'YUBORISH_READY'}
                    </span>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </form>

            <div className={styles.formFooter}>
                <p className={styles.footerNote}>
                    * Xabarlar 24 soat ichida ko'rib chiqiladi.
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
