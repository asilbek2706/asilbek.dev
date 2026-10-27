import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../../services/contactService';
import type { Question } from '../../types';
import styles from '../../styles/Contact/QuestionsPage.module.scss';

const QuestionsPage: React.FC = () => {
    const navigate = useNavigate();

    const { data: questions, isLoading } = useQuery<Question[]>({
        queryKey: ['questions'],
        queryFn: getQuestions,
        refetchInterval: 15000,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={styles.pageWrapper}>
            {/* Cyber Atmosfera Fonlari */}
            <div className={styles.gridOverlay}></div>
            <div className={styles.glowSpot}></div>

            <div className="container relative z-10">
                {/* Header Bo'limi */}
                <header className={styles.header}>
                    <button
                        onClick={() => navigate('/contact')}
                        className={styles.backBtn}
                    >
                        <i className="bi bi-arrow-left"></i>
                        <span>ORQAGA_QAYTISH</span>
                    </button>

                    <div className={styles.titleGroup}>
                        <div className={styles.badge}>
                            <span className={styles.pulse}></span>
                            LIVE_ARCHIVE
                        </div>
                        <h1 className={styles.mainTitle}>MULOQOTLAR_ARXIVI</h1>
                        <p className={styles.description}>
                            Foydalanuvchilar tomonidan yo'llangan barcha savollar va tizim adminining rasmiy javoblari to'plami.
                        </p>
                    </div>

                    <div className={styles.statsBar}>
                        <div className={styles.statItem}>
                            <span className={styles.label}>UMUMIY_XABARLAR</span>
                            <span className={styles.value}>{questions?.length || 0}</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.label}>TIZIM_STATUSI</span>
                            <span className={styles.value} style={{color: '#2ed573'}}>ONLINE</span>
                        </div>
                    </div>
                </header>

                {/* Xabarlar Ro'yxati Bo'limi (Oldingi QuestionList o'rniga) */}
                <section className={styles.listSection}>
                    {isLoading ? (
                        <div className={styles.loaderStack}>
                            {[1, 2, 3, 4].map((n) => (
                                <div key={n} className={styles.skeletonItem} />
                            ))}
                        </div>
                    ) : questions && questions.length > 0 ? (
                        <div className={styles.messageStack}>
                            {[...questions].reverse().map((q, idx) => (
                                <div
                                    key={idx}
                                    className={styles.threadGroup}
                                    style={{ '--index': idx } as React.CSSProperties}
                                >
                                    {/* User Message Card */}
                                    <div className={styles.userCard}>
                                        <div className={styles.cardHeader}>
                                            <span className={styles.userName}>{q.name}</span>
                                            <span className={styles.metaTag}>USER_SENT</span>
                                        </div>
                                        <div className={styles.cardBody}>
                                            <p>{q.message}</p>
                                        </div>
                                    </div>

                                    {/* Admin Response Card */}
                                    {q.answer && (
                                        <div className={styles.adminReply}>
                                            <div className={styles.connectorLine}></div>
                                            <div className={styles.replyBox}>
                                                <div className={styles.replyHeader}>
                                                    <i className="bi bi-shield-check-fill"></i>
                                                    <span className={styles.adminLabel}>ADMIN_CORE_RESPONSE</span>
                                                </div>
                                                <p className={styles.answerText}>{q.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <i className="bi bi-chat-square-dots"></i>
                            <h3>XABARLAR_MAVJUD_EMAS</h3>
                            <p>Hozircha hech qanday muloqot tarixi topilmadi.</p>
                        </div>
                    )}
                </section>

                <footer className={styles.pageFooter}>
                    <p>Yangi savol yo'llamoqchimisiz? <span onClick={() => navigate('/contact')}>Kontakt sahifasiga o'ting</span></p>
                </footer>
            </div>
        </main>
    );
};

export default QuestionsPage;