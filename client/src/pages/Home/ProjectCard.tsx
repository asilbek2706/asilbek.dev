import React from 'react';
import type {Project} from "../../types";
import styles from '../../styles/Home/ProjectCard.module.scss';

const ProjectCard: React.FC<{ project: Project }> = ({project}) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <img src={project.project_image} alt={project.project_name}/>
            <div className={styles.overlay}>
                <a href={project.project_link} target="_blank" rel="noreferrer" className={styles.btn}>
                    Loyiha ko'rinishi
                </a>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.header}>
                <h5>{project.project_name}</h5>
                <a href={project.project_github_link} target="_blank" rel="noreferrer">
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <p>{project.project_description}</p>
            <div className={styles.footer}>
                <span className={styles.badge}>Development</span>
            </div>
        </div>
    </div>
);

export default ProjectCard;