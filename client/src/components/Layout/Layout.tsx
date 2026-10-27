import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Loader from "./Loader";
import { useAboutStore } from "../../store/useAboutStore.ts";
import type { AboutData } from "../../types";
import { getAboutInfo } from "../../services/aboutService.ts";

import styles from '../../styles/Layout/Layout.module.scss';
import Background from "../Shared/Utils/Background.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setAboutInfo, aboutInfo } = useAboutStore();
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);

    const { data, isLoading, isError } = useQuery<AboutData>({
        queryKey: ['about'],
        queryFn: getAboutInfo,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (data) setAboutInfo(data);
    }, [data, setAboutInfo]);

    if (isLoading || (isLoaderVisible && !aboutInfo)) {
        return <Loader onFinished={() => setIsLoaderVisible(false)} />;
    }

    if (isError) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger">Ma'lumotlarni yuklashda xatolik yuz berdi.</div>
            </div>
        );
    }

    return (
        <div className={styles.layoutWrapper}>
            <Background />
            <Navbar />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;