import React from 'react';
import { Link } from 'react-router-dom';
import { useAboutStore } from "../../../store/useAboutStore.ts";
import { useFooter } from '../../../context/FooterContext';
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import styles from '../../../styles/Layout/Footer/Footer.module.scss';

const Footer: React.FC = () => {
    const aboutInfo = useAboutStore((state) => state.aboutInfo);
    const { isSubmitting } = useFooter();

    if (!aboutInfo) return null;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.mainContent}>
                    <div className="row g-5">
                        <FooterBrand info={aboutInfo} />
                        <FooterContact email={aboutInfo.email} phone={aboutInfo.phone_number} />

                        <div className="col-lg-4">
                            <div className={styles.ctaBox}>
                                <h5>Savollaringiz bormi?</h5>
                                <p>Loyiha bo'yicha maslahat yoki hamkorlik uchun xabar qoldiring.</p>
                                <Link to="/contact" className={styles.btnCta}>
                                    {isSubmitting ? 'Yuborilmoqda...' : 'Xabar yuborish'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <span className={styles.copyText}>
                                &copy; {new Date().getFullYear()} {aboutInfo.firstname.toLocaleLowerCase()}-karomatov.dev — Barcha huquqlar himoyalangan.
                            </span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className={styles.mangaBadge}>Build with React & TS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;