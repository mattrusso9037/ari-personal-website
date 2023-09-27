import { Section } from "../ProjectModal/Section"
import { Project, SectionTitle } from "../projectConfiguration"
import React from 'react';

interface IProps {
    project: Project;
}

export const ProjectFindings: React.FC<IProps> = ({ project }) => {
    return (
        <>
           {project.researchMethodology && <Section title={SectionTitle.RESEARCH_METHODOLOGY} content={project.researchMethodology} />}
            <Section title={SectionTitle.RESEARCH_FINDINGS} content={project.researchFindings} />
           {project.designSolution && <Section title={SectionTitle.DESIGN_SOLUTION} content={project.designSolution} />}
            <Section title={SectionTitle.CONCLUSION} content={project.conclusion} />
        </>

    )
}