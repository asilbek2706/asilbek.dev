import React from 'react';
import styles from '../../styles/About/PrinciplesSection.module.scss';

const principles = [
    {
        title: "Toza Kod",
        desc: "Kodning o'qilishi va arxitekturaviy barqarorligi loyiha muvaffaqiyati uchun kalit hisoblanadi.",
        icon: "bi-code-square"
    },
    {
        title: "Xavfsizlik",
        desc: "Backend va Frontend o'rtasida ma'lumotlar xavfsizligi va protokollarga qat'iy amal qilaman.",
        icon: "bi-shield-lock"
    },
    {
        title: "UX/UI Fokus",
        desc: "Interfeys nafaqat ko'zni quvnatishi, balki foydalanuvchi uchun intuitiv va qulay bo'lishi shart.",
        icon: "bi-stars"
    }
];

const PrinciplesSection: React.FC = () => (
    <section className={styles.principlesWrapper}>
        <div className="container">
            <div className={styles.sectionHeader}>
                <span className={styles.preTitle}>Metodologiya</span>
                <h2 className={styles.mainTitle}>Mening ish falsafam</h2>
                <div className={styles.titleLine}></div>
            </div>

            <div className="row g-4">
                {principles.map((item, idx) => (
                    <div key={idx} className="col-lg-4 col-md-6" style={{ '--delay': `${idx * 0.2}s` } as React.CSSProperties}>
                        <div className={styles.principleCard}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.iconBox}>
                                <i className={`bi ${item.icon}`}></i>
                            </div>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <p className={styles.cardDesc}>{item.desc}</p>

                            <div className={styles.cardFooter}>
                                <span className={styles.stepNumber}>0{idx + 1}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PrinciplesSection;