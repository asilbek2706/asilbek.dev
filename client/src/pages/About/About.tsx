import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAboutInfo } from '../../services/aboutService';
import { useAboutStore } from '../../store/useAboutStore';
import HeroSection from './HeroSection';
import PrinciplesSection from './PrinciplesSection';
import SkillsSection from './SkillsSection';
import styles from '../../styles/About/About.module.scss';

const About: React.FC = () => {
    const storeAbout = useAboutStore((state) => state.aboutInfo);
    const { data: about, isLoading, isError } = useQuery({
        queryKey: ['about'],
        queryFn: getAboutInfo,
        initialData: storeAbout || undefined,
    });

    // 1. PREMIUM LOADING STATE
    if (isLoading && !about) return (
        <div className={styles.loaderWrapper}>
            <div className={styles.customLoader}>
                <div className={styles.circle}></div>
                <div className={styles.text}>Yuklanmoqda...</div>
            </div>
        </div>
    );

    // 2. PREMIUM ERROR STATE
    if (isError || !about) return (
        <div className={styles.errorWrapper}>
            <div className={styles.errorCard}>
                <i className="bi bi-cloud-slash"></i>
                <h3>Ma'lumot uzatishda xatolik</h3>
                <p>Server bilan bog'lanish imkoni bo'lmadi. Iltimos, sahifani yangilab ko'ring.</p>
                <button onClick={() => window.location.reload()} className={styles.refreshBtn}>
                    Yangilash
                </button>
            </div>
        </div>
    );

    return (
        <main className={styles.aboutPage}>
            {/* Sahifaning orqa fonidagi umumiy nurli nuqtalar */}
            <div className={styles.bgGlow}></div>

            <HeroSection about={about} />
            <div className={styles.separator}></div>
            <PrinciplesSection />
            <SkillsSection />
        </main>
    );
};

export default About;