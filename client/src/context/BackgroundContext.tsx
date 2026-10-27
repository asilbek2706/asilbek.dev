import {createContext, type FC, type ReactNode, useContext, useState} from 'react';

interface BackgroundContextType {
    variant: 'default' | 'spiral' | 'dots';
    setVariant: (v: 'default' | 'spiral' | 'dots') => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [variant, setVariant] = useState<'default' | 'spiral' | 'dots'>('default');

    return (
        <BackgroundContext.Provider value={{variant, setVariant}}>
            {children}
        </BackgroundContext.Provider>
    );
};

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if (!context) throw new Error("useBackground must be used within a BackgroundProvider");
    return context;
};