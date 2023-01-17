import * as React from 'react';
import {ITheme} from './ITheme';
import {ProjectCard} from './ProjectCard/ProjectCard';
import {IProject} from './IProject';
import {ISize} from './ISize';
import './projectDisplay.scss';
import {Section} from "../common/Section/Section";
import {Icon} from "../common/Icon";

const DEFAULT_THEME: ITheme = {
    primary: 'black',
    secondary: 'gray',
    accent: 'blue',
}

const DEFAULT_DIMENSIONS: ISize = {
    height: 'auto',
    width: '100%',
}

export interface IProjectDisplayProps {
    projects: IProject[];
    theme?: ITheme;
    dimensions?: ISize;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    onProjectSelected: any;
}


export const ProjectDisplay: React.FC<IProjectDisplayProps> =
    ({
         projects = [],
         theme = DEFAULT_THEME,
         dimensions = DEFAULT_DIMENSIONS,
        showModal,
        setShowModal,
         onProjectSelected,
     }) => {


        return (
            <Section className={'Projects'} title={'My Projects'} icon={Icon.Implementation}>
                <div className={'ProjectDisplay'}>
                    <div className={'project_container'}>
                        {projects.map((project, index) => {
                            return <ProjectCard key={project.title} project={project} onProjectSelected={() => onProjectSelected(index)}/>
                        })}
                    </div>
                </div>
            </Section>
        )
    };
