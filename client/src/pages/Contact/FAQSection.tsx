import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getFAQs} from '../../services/faqService';
import styles from '../../styles/Contact/FAQSection.module.scss';

const FAQSection: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const {
        data: faqs,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ['faqs'],
        queryFn: getFAQs,
        staleTime: 5 * 60 * 1000,
        retry: 1,
    });

    return (
        <section className={styles.faqSection} aria-labelledby="faq-title">
            <header className={styles.header}>
                <span className={styles.eyebrow}>
                    <span className={styles.statusDot}/>
                    KNOWLEDGE_BASE
                </span>

                <h2 id="faq-title" className={styles.title}>
                    KO‘P SO‘RALADIGAN
                    <span> SAVOLLAR</span>
                </h2>

                <p className={styles.description}>
                    Sizni qiziqtirishi mumkin bo‘lgan savollarga javoblar.
                </p>
            </header>

            {isLoading ? (
                <div className={styles.stateMessage} role="status">
                    <span className={styles.loader}/>
                    <p>MA’LUMOTLAR YUKLANMOQDA...</p>
                </div>
            ) : isError ? (
                <div className={styles.stateMessage} role="alert">
                    <i className="bi bi-exclamation-circle"/>
                    <p>FAQ ma’lumotlarini yuklab bo‘lmadi.</p>
                    <button type="button" onClick={() => refetch()}>
                        QAYTA URINISH
                    </button>
                </div>
            ) : faqs && faqs.length > 0 ? (
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = activeId === faq.id;
                        const answerId = `faq-answer-${faq.id}`;

                        return (
                            <article
                                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                                key={faq.id}
                                style={{'--item-index': index} as React.CSSProperties}
                            >
                                <h3 className={styles.questionHeading}>
                                    <button
                                        type="button"
                                        className={styles.questionButton}
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() =>
                                            setActiveId(isOpen ? null : faq.id)
                                        }
                                    >
                                        <span className={styles.questionNumber}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <span className={styles.questionText}>
                                            {faq.question}
                                        </span>

                                        <span className={styles.toggleIcon} aria-hidden="true">
                                            <span/>
                                            <span/>
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={answerId}
                                    className={styles.answerPanel}
                                    hidden={!isOpen}
                                >
                                    <div className={styles.answerInner}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <div className={styles.stateMessage}>
                    <i className="bi bi-chat-square-text"/>
                    <p>HOZIRCHA FAQ MA’LUMOTLARI MAVJUD EMAS.</p>
                </div>
            )}

            <footer className={styles.footer}>
                <span className={styles.footerLine}/>
                <span>YANA SAVOLINGIZ BORMI?</span>
                <span className={styles.footerLine}/>
            </footer>
        </section>
    );
};

export default FAQSection;
