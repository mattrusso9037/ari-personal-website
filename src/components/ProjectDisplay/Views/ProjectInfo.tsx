import { Section } from "../ProjectModal/Section"
import { Project, SectionTitle } from "../projectConfiguration"
import React from 'react';

interface IProps {
    project: Project;
}

export const ProjectInfo: React.FC<IProps> = ({project}) => {
    return (
        <>
            <Section title={SectionTitle.GOALS} content={project.goalsAndTargetUsers} />
            <Section title={SectionTitle.CHALLENGES_AND_CONSTRAINTS} content={project.challengesAndConstraints} />
            <Section title={SectionTitle.INITIAL_DESIGN_CONCEPTS} content={project.initialDesignConcepts} />
        </>

    )
}