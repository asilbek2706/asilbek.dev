import React from 'react';
import styles from '../../../styles/Layout/Footer/FooterContact.module.scss';

const FooterContact: React.FC<{ email: string; phone: string }> = ({email, phone}) => (
    <div className="col-lg-3 col-md-6">
        <h6 className={styles.title}>Bog'lanish</h6>
        <div className={styles.contactList}>
            <div className={styles.contactItem}>
                <i className="bi bi-envelope-at"></i>
                <span>{email}</span>
            </div>
            <div className={styles.contactItem}>
                <i className="bi bi-geo-alt"></i>
                <span>Bukhara, Uzbekistan</span>
            </div>
            <div className={styles.contactItem}>
                <i className="bi bi-telephone"></i>
                <span>+{phone}</span>
            </div>
        </div>
    </div>
);

export default FooterContact;