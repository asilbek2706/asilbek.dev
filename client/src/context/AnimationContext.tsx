import React, { createContext, useContext, useState, useEffect } from 'react';

const AnimationContext = createContext({ isReady: false });

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimationContext.Provider value={{ isReady }}>
            <div className={isReady ? 'is-ready' : 'is-loading'}>
                {children}
            </div>
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);