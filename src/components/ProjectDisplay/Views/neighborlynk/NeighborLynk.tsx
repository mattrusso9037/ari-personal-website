import * as React from 'react';
import { Project } from '../../projectConfiguration';
import { TwoColumn } from '../../../TwoColumn/TwoColumn';
import '../view-styles.scss';
import { ProjectInfo } from '../ProjectInfo';
import { DesignConceptImages } from '../DesignConceptImages';
import { ProjectImages } from '../ProjectImages';
import { ProjectFindings } from '../ProjectFindings';

interface IProps {
    project: Project;
}

export const NeighborLynk: React.FC<IProps> = ({ project }) => {
    return (
        <section className='CaseStudySection'>
            <TwoColumn leftColumn={<ProjectInfo project={project} />} rightColumn={<DesignConceptImages project={project} />} />
            <TwoColumn leftColumn={<ProjectImages project={project} />} rightColumn={<ProjectFindings project={project} />} />
        </section>
    )
}