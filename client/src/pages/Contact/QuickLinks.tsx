import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Contact/QuickLinks.module.scss';

interface QuickLinksProps {
    questionCount: number;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ questionCount }) => {
    const navigate = useNavigate();

    return (
        <section className={styles.quickLinks} aria-labelledby="quick-links-title">
            <div className={styles.intro}>
                <span className={styles.eyebrow}>
                    <span className={styles.dot} />
                    QUICK LINKS
                </span>

                <h2 id="quick-links-title">
                    Foydali
                    <br />
                    havolalar
                </h2>

                <p>Kerakli bo‘limlarga tez va qulay kirish uchun.</p>
            </div>

            <div className={styles.links}>
                <button
                    type="button"
                    className={styles.linkCard}
                    onClick={() => navigate('/contact/questions')}
                >
                    <span className={styles.iconCircle}>
                        <i className="bi bi-chat-square-dots-fill" />
                    </span>

                    <span className={styles.linkInfo}>
                        <strong>Muloqotlar arxivi</strong>
                        <small>{questionCount} ta savol</small>
                    </span>

                    <span className={styles.arrow}>
                        <i className="bi bi-arrow-up-right" />
                    </span>
                </button>

                <a
                    href="https://t.me/as1lbek_2706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkCard}
                >
                    <span className={styles.iconCircle}>
                        <i className="bi bi-telegram" />
                    </span>

                    <span className={styles.linkInfo}>
                        <strong>Telegram</strong>
                        <small>@as1lbek_2706</small>
                    </span>

                    <span className={styles.arrow}>
                        <i className="bi bi-arrow-up-right" />
                    </span>
                </a>

                <a
                    href="https://github.com/asilbek2706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkCard}
                >
                    <span className={styles.iconCircle}>
                        <i className="bi bi-github" />
                    </span>

                    <span className={styles.linkInfo}>
                        <strong>GitHub</strong>
                        <small>asilbek2706</small>
                    </span>

                    <span className={styles.arrow}>
                        <i className="bi bi-arrow-up-right" />
                    </span>
                </a>
            </div>

            <div className={styles.decoration} aria-hidden="true">
                <i className="bi bi-send-fill" />
                <span />
            </div>
        </section>
    );
};

export default QuickLinks;
