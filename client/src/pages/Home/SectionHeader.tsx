import React from 'react';
import styles from '../../styles/Home/SectionHeader.module.scss';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({subtitle, title, centered = false}) => (
    <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
        <h6 className={styles.subtitle}>{subtitle}</h6>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.underline}></div>
    </div>
);

export default SectionHeader;