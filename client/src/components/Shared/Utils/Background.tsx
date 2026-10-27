import React from 'react';
import styles from '../../../styles/Layout/Background.module.scss';
import { useBackground } from '../../../context/BackgroundContext.tsx';
import { useAnimation } from '../../../context/AnimationContext';

const Background: React.FC = () => {
    const { variant } = useBackground();
    const { isReady } = useAnimation();

    return (
        <div className={`
            ${styles.bgContainer} 
            ${styles[variant]} 
            ${isReady ? styles.isReady : ''}
        `}>
            <div className={styles.shapeWrapper}>
                <svg viewBox="0 0 800 800" fill="none" className={styles.spiralSvg}>
                    {[...Array(15)].map((_, i) => (
                        <circle
                            key={i}
                            cx="400"
                            cy="400"
                            r={150 + i * 25}
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className={styles.circle}
                        />
                    ))}
                </svg>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Background;