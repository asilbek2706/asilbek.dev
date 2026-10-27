import React, { createContext, useContext, useState } from 'react';

interface FooterContextType {
    isSubmitting: boolean;
    setSubmitting: (val: boolean) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSubmitting, setSubmitting] = useState(false);

    return (
        <FooterContext.Provider value={{ isSubmitting, setSubmitting }}>
            {children}
        </FooterContext.Provider>
    );
};

export const useFooter = () => {
    const context = useContext(FooterContext);
    if (!context) throw new Error("useFooter must be used within a FooterProvider");
    return context;
};