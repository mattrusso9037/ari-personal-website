import * as React from 'react';
import { Project } from '../../projectConfiguration';
import { TwoColumn } from '../../../TwoColumn/TwoColumn';
import '../view-styles.scss';
import { ProjectInfo } from '../ProjectInfo';
import { DesignConceptImages } from '../DesignConceptImages';
import { ProjectImages } from '../ProjectImages';
import { ProjectFindings } from '../ProjectFindings';
import { OneColumn } from '../../../OneColumn/OneColumn';

interface IProps {
    project: Project;
}

export const TheatreSnax: React.FC<IProps> = ({ project }) => {
    return (
        <section className='CaseStudySection'>
        <OneColumn topRow={<ProjectInfo project={project} />} bottomRow={<DesignConceptImages project={project} />} />
        <OneColumn topRow={<ProjectFindings project={project} />} bottomRow={<ProjectImages project={project} />} />
    </section>
    )
}