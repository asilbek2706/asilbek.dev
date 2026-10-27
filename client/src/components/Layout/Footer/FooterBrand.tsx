import React from 'react';
import styles from '../../../styles/Layout/Footer/FooterBrand.module.scss';
import type { AboutData } from "../../../types";

const FooterBrand: React.FC<{ info: AboutData }> = ({ info }) => (
    <div className="col-lg-5">
        <div className={styles.brandWrapper}>
            <h3 className={styles.logoText}>
                {info.firstname.toLowerCase()}-karomatov<span className={styles.dot}>.</span>dev
            </h3>
            <p className={styles.quote}>
                "Kod yozish — bu san'at, interfeys yaratish esa — bu foydalanuvchi qalbini zabt etishdir."
            </p>
            <div className={styles.socialGrid}>
                <a href={info.github_link} target="_blank" rel="noreferrer" className={styles.socialPill}>
                    <i className="bi bi-github"></i> <span>GitHub</span>
                </a>
                <a href={info.telegram_link} target="_blank" rel="noreferrer" className={styles.socialPill}>
                    <i className="bi bi-telegram"></i> <span>Telegram</span>
                </a>
            </div>
        </div>
    </div>
);

export default FooterBrand;