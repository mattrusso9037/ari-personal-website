import { Section } from "../ProjectModal/Section"
import { Project, SectionTitle } from "../projectConfiguration"
import React from 'react';

interface IProps {
    project: Project;
}

export const ProjectInfo: React.FC<IProps> = ({project}) => {
    return (
        <>
            {project.problemStatement && <Section title={SectionTitle.PROBLEM_STATEMENT} content={project.problemStatement} />}
            {project.goals && <Section title={SectionTitle.GOALS} content={project.goals} />}
            {project.targetUsers && <Section title={SectionTitle.TARGET_USERS} content={project.targetUsers} />}
            {project.challengesAndConstraints && <Section title={SectionTitle.CHALLENGES_AND_CONSTRAINTS} content={project.challengesAndConstraints} />
}            <Section title={SectionTitle.INITIAL_DESIGN_CONCEPTS} content={project.initialDesignConcepts} />
        </>

    )
}