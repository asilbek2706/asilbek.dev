import React from 'react';
import styles from '../../styles/Projects/ProjectStates.module.scss';

export const ProjectLoading: React.FC = () => (
    <div className="col-12">
        <div className={styles.loadingWrapper}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <h3 className={styles.loadingText}>Arsenal tayyorlanmoqda...</h3>
        </div>
    </div>
);

export const ProjectError: React.FC = () => (
    <div className="col-12">
        <div className={styles.errorCard}>
            <div className={styles.errorIcon}>
                <i className="bi bi-exclamation-triangle"></i>
            </div>
            <h2 className={styles.errorTitle}>Aloqa uzildi</h2>
            <p className={styles.errorDesc}>Loyihalarni serverdan olib bo'lmadi. Internetni yoki ulanishni tekshiring.</p>
            <button className={styles.retryBtn} onClick={() => window.location.reload()}>
                QAYTA URINISH
            </button>
        </div>
    </div>
);

export const ProjectEmpty: React.FC = () => (
    <div className="col-12">
        <div className={styles.emptyBox}>
            <div className={styles.ghostIcon}>
                <i className="bi bi-robot"></i>
            </div>
            <p className={styles.emptyText}>Hozircha bu yerda hech narsa yo'q...</p>
            <div className={styles.line}></div>
        </div>
    </div>
);