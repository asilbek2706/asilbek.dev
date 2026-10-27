import { useState } from 'react';
import styles from '../../styles/Layout/Loader.module.scss';

interface Props {
    onFinished?: () => void;
}

const Loader = ({ onFinished }: Props) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleAnimationEnd = () => {
        setIsFadingOut(true);
        if (onFinished) {
            // Fade-out animatsiyasi tugashi uchun biroz kutamiz
            setTimeout(onFinished, 800);
        }
    };

    return (
        <div className={`${styles.overlay} ${isFadingOut ? styles.fadeOut : ''}`}>
            <div className={styles.content}>
                <h1 className={styles.mangaTitle} data-text="ASILBEK-KAROMATOV.DEV">
                    ASILBEK-KAROMATOV<span className={styles.accent}>.DEV</span>
                </h1>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        onAnimationEnd={handleAnimationEnd}
                    ></div>
                </div>

                <div className={styles.statusCode}>
                    <span className={styles.blink}>_</span>SYSTEM_INIT_COMPLETE...
                </div>
            </div>
        </div>
    );
};

export default Loader;