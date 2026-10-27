import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/projectService';
import type { Project } from '../../types';

import SectionHeader from "../Home/SectionHeader.tsx";
import ProjectItem from "./ProjectItem.tsx";
import { ProjectLoading, ProjectError, ProjectEmpty } from "./ProjectStates.tsx";
import styles from "../../styles/Projects/Projects.module.scss";

const Projects: React.FC = () => {
    const { data: projects, isLoading, isError } = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: getProjects,
    });

    return (
        <section className={styles.projectsPageWrapper}>
            {/* Fon dekoratsiyalari */}
            <div className={styles.halftone}></div>
            <div className={styles.ambientGlow}></div>

            <div className="container relative z-10">
                <SectionHeader
                    subtitle="MY COLLECTION"
                    title="Barcha Loyihalarim"
                    centered
                />

                <div className="row g-5 mt-4">
                    {isLoading && <ProjectLoading />}

                    {isError && <ProjectError />}

                    {!isLoading && !isError && projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                project={project}
                            />
                        ))
                    ) : (
                        !isLoading && !isError && <ProjectEmpty />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;