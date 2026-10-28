import React from 'react';
import styles from '../../../styles/Layout/Background.module.scss';
import { useBackground } from '../../../context/BackgroundContext.tsx';

const Background: React.FC = () => {
    const { variant } = useBackground();

    return (
        <div className={`${styles.bgContainer} ${styles[variant]}`}>
            <div className={styles.ambientGlow} />
            <div className={styles.grid} />

            <div className={styles.shapeWrapper}>
                <svg
                    viewBox="0 0 800 800"
                    fill="none"
                    className={styles.spiralSvg}
                    aria-hidden="true"
                >
                    {[...Array(18)].map((_, i) => (
                        <circle
                            key={i}
                            cx="400"
                            cy="400"
                            r={130 + i * 22}
                            stroke="currentColor"
                            strokeWidth="0.8"
                        />
                    ))}
                </svg>
            </div>

            <div className={styles.orbOne} />
            <div className={styles.orbTwo} />
            <div className={styles.orbThree} />

            <div className={styles.particles} />
            <div className={styles.overlay} />
        </div>
    );
};

export default Background;
