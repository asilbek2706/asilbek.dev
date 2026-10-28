import React from 'react';
import type { Project } from '../../types';
import ProjectItem from '../Projects/ProjectItem';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return <ProjectItem project={project} />;
};

export default ProjectCard;
