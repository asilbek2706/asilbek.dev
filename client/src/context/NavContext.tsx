import React, {createContext, useContext, useEffect, useState} from 'react';

interface NavContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: (val: boolean) => void;
    isScrolled: boolean;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavContext.Provider value={{isMenuOpen, setIsMenuOpen, isScrolled}}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) throw new Error("useNav must be used within a NavProvider");
    return context;
};