import { Section } from "../ProjectModal/Section"
import { Project, SectionTitle } from "../projectConfiguration"
import React from 'react';

interface IProps {
    project: Project;
}

export const ProjectFindings: React.FC<IProps> = ({ project }) => {
    return (
        <>
            <Section title={SectionTitle.RESEARCH_FINDINGS} content={project.researchFindings} />
            <Section title={SectionTitle.CONCLUSION} content={project.conclusion} />
        </>

    )
}