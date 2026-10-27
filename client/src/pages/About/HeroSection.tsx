import React from 'react';
import type { AboutData } from '../../types';
import styles from '../../styles/About/HeroSection.module.scss';

interface Props {
    about: AboutData;
}

const HeroSection: React.FC<Props> = ({ about }) => {
    return (
        <section className={styles.aboutHero}>
            <div className="container">
                <div className="row g-5 align-items-center">

                    <div className="col-lg-5 mb-20">
                        <div className={styles.imageContainer}>
                            <div className={styles.abstractShape}></div>
                            <div className={styles.imageFrame}>
                                <img
                                    src={about.image}
                                    alt={about.firstname}
                                    className={styles.profileImg}
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className={styles.expBadge}>
                                <div className={styles.expIcon}>
                                    <i className="bi bi-lightning-charge-fill"></i>
                                </div>
                                <div className={styles.expContent}>
                                    <h6 className={styles.expTitle}>2+ Years</h6>
                                    <small className={styles.expSub}>Learning Experience</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. TEXT QISMI */}
                    <div className="col-lg-7">
                        <div className={styles.infoWrapper}>
                            <div className={styles.metaBadge}>
                                <span className={styles.dot}></span>
                                <span className={styles.metaText}>Men Haqimda</span>
                            </div>

                            <h1 className={styles.mainTitle}>
                                {about.firstname} <span className={styles.outline}>{about.lastname}</span>
                            </h1>

                            <p className={styles.leadText}>
                                {about.about_text}
                            </p>

                            {/* Contact Grid */}
                            <div className={styles.contactGrid}>
                                <div className={styles.contactCard}>
                                    <div className={styles.iconBox}>
                                        <i className="bi bi-envelope-at"></i>
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>Email</span>
                                        <a href={`mailto:${about.email}`} className={styles.link}>{about.email}</a>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.iconBox}>
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>Manzil</span>
                                        <span className={styles.value}>Bukhara, Uzbekistan</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Footer */}
                            <div className={styles.footer}>
                                <span className={styles.footerLabel}>Bog'lanish:</span>
                                <div className={styles.socialGrid}>
                                    <a href={about.github_link} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                                        <i className="bi bi-github"></i>
                                    </a>
                                    <a href={about.telegram_link} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                                        <i className="bi bi-telegram"></i>
                                    </a>
                                    <a href={about.instagram_link} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;