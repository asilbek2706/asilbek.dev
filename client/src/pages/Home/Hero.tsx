import React from 'react';
import { Link } from 'react-router-dom';
import type { AboutData } from "../../types";
import styles from '../../styles/Home/Hero.module.scss';

interface HeroProps {
    aboutInfo: AboutData;
}

const Hero: React.FC<HeroProps> = ({ aboutInfo }) => (
    <section className={styles.heroModern}>
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className={styles.contentBox}>
                        <div className={styles.badge} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                            <span className={styles.pulse}></span>
                            <span className={styles.badgeText}>Ready for new challenges</span>
                        </div>

                        <h1 className={styles.title} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                            <span className={styles.greeting}>Salom, men</span> <br />
                            {aboutInfo.firstname} <span className={styles.outline}>{aboutInfo.lastname}</span>
                        </h1>

                        <div className={styles.description} style={{ '--delay': '0.5s' } as React.CSSProperties}>
                            Men <span className={styles.highlightText}>Acharya University</span> talabasi va
                            murakkab tizimlar yaratishga ishtiyoqmand <br />
                            <strong>Full-stack muhandisiman.</strong>
                        </div>

                        <div className={styles.actions} style={{ '--delay': '0.7s' } as React.CSSProperties}>
                            <Link to="/contact" className={styles.btnPrimary}>
                                Loyihani boshlaymiz <i className="bi bi-rocket-takeoff"></i>
                            </Link>
                            <Link to="/projects" className={styles.btnOutline}>
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <div className={styles.visualWrapper}>
                        <div className={`${styles.floatIcon} ${styles.react}`}><i className="bi bi-patch-check-fill"></i><span>React</span></div>
                        <div className={`${styles.floatIcon} ${styles.js}`}><i className="bi bi-filetype-js"></i></div>
                        <div className={`${styles.floatIcon} ${styles.ts}`}><i className="bi bi-filetype-tsx"></i></div>
                        <div className={`${styles.floatIcon} ${styles.sass}`}><i className="bi bi-filetype-scss"></i></div>
                        <div className={`${styles.floatIcon} ${styles.bootstrap}`}><i className="bi bi-bootstrap-fill"></i></div>

                        <div className={styles.mainImageFrame}>
                            <div className={styles.blobGradient}></div>
                            <img
                                src={aboutInfo.image}
                                alt={aboutInfo.firstname}
                                className={styles.heroImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;