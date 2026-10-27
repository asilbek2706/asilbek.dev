import React from 'react';
import SkillChip from "./SkillChip";
import styles from '../../styles/Home/StatsCards.module.scss';

const StatsCard: React.FC = () => {
    const skills = [
        {name: 'ReactJS', icon: 'bi-code-slash', color: '#61DAFB'},
        {name: 'TypeScript', icon: 'bi-filetype-tsx', color: '#3178C6'},
        {name: 'Golang', icon: 'bi-cpu-fill', color: '#00ADD8'},
        {name: 'Redis', icon: 'bi-database-fill-check', color: '#DC382D'},
        {name: 'Python', icon: 'bi-terminal-fill', color: '#3776AB'},
        {name: 'SASS', icon: 'bi-palette-fill', color: '#CC6699'}
    ];

    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className={styles.glassCard}>
                            <h4 className={styles.cardTitle}>
                                <i className="bi bi-mortarboard"></i> Ta'lim
                            </h4>
                            <div className={styles.timeline}>
                                <div className={styles.timelineItem}>
                                    <span className={styles.year}>2024 — 2028</span>
                                    <h5 className={styles.school}>Acharya University Uzbekistan</h5>
                                    <p className={styles.text}>
                                        Dasturiy ta'minot muhandisligi yo'nalishida murakkab algoritmlar va tizimlar
                                        arxitekturasini o'rganmoqdaman.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.glassCard}>
                            <h4 className={styles.cardTitle}>
                                <i className="bi bi-cpu"></i> Arsenal
                            </h4>
                            <div className={styles.skillsGrid}>
                                {skills.map(skill => (
                                    <SkillChip key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCard;