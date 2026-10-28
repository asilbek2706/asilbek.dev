import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAboutInfo } from '../../services/aboutService';
import { getProjects } from '../../services/projectService';

import Hero from './Hero';
import StatsCard from "./StatsCards";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

import type { AboutData, Project } from '../../types';
import styles from '../../styles/Home/Home.module.scss';
import { HomeProvider } from "../../context/pages/HomeContext.tsx";

const Home: React.FC = () => {
    const { data: aboutInfo, isLoading: isAboutLoading } = useQuery<AboutData | null>({
        queryKey: ['about'],
        queryFn: getAboutInfo,
    });

    const { data: projects, isLoading: isProjectsLoading } = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: getProjects,
    });

    if (isAboutLoading || !aboutInfo) {
        return null;
    }

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
                            {isProjectsLoading ? (
                                <div className="col-12 text-center py-5">
                                    <div className={styles.loadingState}>
                                        <span className={styles.loaderLine}></span>
                                        <p>Loyihalar yuklanmoqda...</p>
                                    </div>
                                </div>
                            ) : (
                                projects &&
                                projects
                                    .slice(-2)
                                    .reverse()
                                    .map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />
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
