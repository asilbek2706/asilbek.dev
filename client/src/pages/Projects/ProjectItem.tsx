import React from 'react';
import type { Project } from "../../types";
import styles from "../../styles/Projects/ProjectItem.module.scss";

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="col-xl-4 col-md-6 col-12 d-flex align-items-stretch mb-4">
            <div className={styles.projectWrapper}>
                {/* Asosiy Karta */}
                <div className={styles.projectCard}>

                    {/* Rasm qismi */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageOverlays}>
                            <div className={styles.glowSpot}></div>
                            <div className={styles.glassLayer}></div>
                        </div>

                        <img
                            src={project.project_image}
                            alt={project.project_name}
                            className={styles.mainImg}
                        />

                        {/* Suzib yuruvchi Linklar */}
                        <div className={styles.floatingActions}>
                            <a href={project.project_github_link} target="_blank" rel="noreferrer" className={styles.circleBtn}>
                                <i className="bi bi-github"></i>
                            </a>
                            <a href={project.project_link} target="_blank" rel="noreferrer" className={styles.circleBtn}>
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Kontent qismi */}
                    <div className={styles.infoSection}>
                        <div className={styles.meta}>
                            <span className={styles.category}>Project</span>
                            <div className={styles.statusDot}></div>
                        </div>

                        <h3 className={styles.title}>{project.project_name}</h3>

                        <p className={styles.desc}>
                            {project.project_description}
                        </p>

                        <div className={styles.cardFooter}>
                            <div className={styles.divider}></div>
                            <div className={styles.footerContent}>
                                <a href={project.project_link} target="_blank" rel="noreferrer" className={styles.liveLink}>
                                    <span>LIVE PREVIEW</span>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;