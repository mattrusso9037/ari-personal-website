import * as React from 'react';
import {IProject} from '../IProject';
import './projectCard.scss';
import { Project } from '../projectConfiguration';

interface IProjectCardProps {
    project: Project;
    onProjectSelected: () => void;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({project, onProjectSelected}) => {
    return (
        <div onClick={onProjectSelected} className={'ProjectCard'} style={{backgroundImage: `url(/assets/projects/${project.thumbnailImageUri})`,}}>
            <div className={'content'}>
                <h3>{project.title}</h3>
                <div className={'description'}>
                    {project.description}
                </div>
            </div>
            <div className={'overlay'}/>
        </div>
    )
};
