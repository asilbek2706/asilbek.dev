import React from 'react';
import type { StatusState } from '../../types';
import styles from '../../styles/Contact/ContactStatus.module.scss';

interface ContactStatusProps {
    status: StatusState | null;
}

const ContactStatus: React.FC<ContactStatusProps> = ({ status }) => {
    if (!status) return null;

    const statusIcons: Record<StatusState['type'], string> = {
        success: 'bi-check2-circle',
        danger: 'bi-exclamation-octagon',
        info: 'bi-info-circle'
    };

    return (
        <div className={`${styles.statusWrapper} ${styles[status.type]}`}>
            <div className={styles.statusContent}>
                <div className={styles.iconBox}>
                    <i className={`bi ${statusIcons[status.type]}`}></i>
                </div>
                <div className={styles.textBox}>
                    <span className={styles.statusLabel}>
                        {status.type === 'success' ? 'Muvaffaqiyatli' : 'Tizim xabari'}
                    </span>
                    <p className={styles.message}>{status.msg}</p>
                </div>
            </div>
            <div className={styles.progressLine}></div>
        </div>
    );
};

export default ContactStatus;