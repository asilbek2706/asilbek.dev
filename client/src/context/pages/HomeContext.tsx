import React, {createContext, useContext, useState} from 'react';

interface HomeContextType {
    activeCategory: string;
    setActiveCategory: (cat: string) => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [activeCategory, setActiveCategory] = useState('All');
    return (
        <HomeContext.Provider value={{activeCategory, setActiveCategory}}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => {
    const context = useContext(HomeContext);
    if (!context) throw new Error("useHome must be used within a HomeProvider");
    return context;
};