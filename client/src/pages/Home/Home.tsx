import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAboutStore } from '../../store/useAboutStore';
import { getProjects } from '../../services/projectService';

import Hero from './Hero';
import StatsCard from "./StatsCards";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

import type { Project } from '../../types';
import styles from '../../styles/Home/Home.module.scss';
import {HomeProvider} from "../../context/pages/HomeContext.tsx";

const Home: React.FC = () => {
    const aboutInfo = useAboutStore((state) => state.aboutInfo);

    const { data: projects, isLoading } = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: getProjects,
    });

    if (!aboutInfo) return null;

    return (
        <HomeProvider>
            <div className={styles.homeWrapper}>
                <Hero aboutInfo={aboutInfo} />

                <StatsCard />

                <section className={styles.projectsSection}>
                    <div className="container">
                        <SectionHeader
                            subtitle="Portfolio"
                            title="Oxirgi loyihalar"
                            centered
                        />

                        <div className="row g-4 justify-content-center mt-2">
                            {isLoading ? (
                                <div className="col-12 text-center py-5">
                                    <div className={styles.loadingState}>
                                        <span className={styles.loaderLine}></span>
                                        <p>Loyihalar yuklanmoqda...</p>
                                    </div>
                                </div>
                            ) : (
                                projects && projects.slice(-2).reverse().map((p, index) => (
                                    <div
                                        key={`${p.id}-${index}`}
                                        className="col-md-6 col-lg-5"
                                    >
                                        <ProjectCard project={p} />
                                    </div>
                                ))
                            )}
                        </div>

                        <div className={styles.viewAllWrapper}>
                            <a href="/projects" className={styles.viewAllBtn}>
                                <span>Barcha loyihalarni ko'rish</span>
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </HomeProvider>
    );
};

export default Home;