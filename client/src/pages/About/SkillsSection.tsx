import React from "react";
import styles from "../../styles/About/SkillsSection.module.scss";

const SkillsSection: React.FC = () => {
    const skills = [
        'React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3',
        'Sass/SCSS', 'Tailwind CSS', 'Golang', 'Django',
        'SQLite3', 'Git', 'Figma', 'Redux Toolkit'
    ];

    // Animatsiya uzluksiz bo'lishi uchun 2 marta takrorlash kifoya
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section className={styles.skillsWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.line}></div>
                    <h3 className={styles.title}>Texnik bilimlar</h3>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.marqueeContainer}>
                    {/* Chap va o'ng tomondagi "Fade" effekti uchun qatlamlar */}
                    <div className={styles.overlayLeft}></div>
                    <div className={styles.overlayRight}></div>

                    <div className={styles.marqueeContent}>
                        {duplicatedSkills.map((skill, idx) => (
                            <div key={idx} className={styles.skillChip}>
                                <div className={styles.dot}></div>
                                <span className={styles.skillName}>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;