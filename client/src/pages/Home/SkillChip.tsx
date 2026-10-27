import React from 'react';
import styles from '../../styles/Home/SkillChip.module.scss';

interface SkillChipProps {
    name: string;
    icon?: string;
    color?: string;
}

const SkillChip: React.FC<SkillChipProps> = ({name, icon, color}) => (
    <div className={styles.chip}>
        {icon && <i className={`bi ${icon}`} style={{color: color}}></i>}
        <span className={styles.name}>{name}</span>
    </div>
);

export default SkillChip;