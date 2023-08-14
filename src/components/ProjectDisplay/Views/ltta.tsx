import * as React from 'react';
import { ProjectId } from './viewMap';
import { Project, SectionTitle } from '../projectConfiguration';
import { Section } from '../ProjectModal/Section';
import { TwoColumn } from '../../TwoColumn/TwoColumn';
import './ltta.scss';

interface IProps {
    project: Project;
}

export const LTTA: React.FC<IProps> = ({ project }) => {
    console.log(project)
    const leftColumn = (
        <div>
            <Section title={SectionTitle.GOALS} content={project.goalsAndTargetUsers} />
            <Section title={SectionTitle.CHALLENGES_AND_CONSTRAINTS} content={project.challengesAndConstraints} />
            <Section title={SectionTitle.INITIAL_DESIGN_CONCEPTS} content={project.initialDesignConcepts} />
        </div>
    );

    const rightColumn = (
        <div className='img-container'>
            {project.initialDesignConceptsImages.map((partialPath) => <img src={`assets/projects/${partialPath}`} />)}
        </div>
    );

    const sectionTwoLeftCol = (
        <div className='img-container'>
            {project.images.map((partialPath) => <img src={`assets/projects/${partialPath}`} />)}
        </div>
    );

    const sectionTwoRightCol = (
        <div>
            <Section title={SectionTitle.RESEARCH_FINDINGS} content={project.researchFindings} />
            <Section title={SectionTitle.CONCLUSION} content={project.conclusion} />
        </div>
    );

    return (
        <section className='LTTA'>
            <TwoColumn leftColumn={leftColumn} rightColumn={rightColumn} />
            <TwoColumn leftColumn={sectionTwoLeftCol} rightColumn={sectionTwoRightCol} />
        </section>
    )
}