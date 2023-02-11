import * as React from 'react';
import { ITheme } from './ITheme';
import { ProjectCard } from './ProjectTile/ProjectCard';
import { IProject } from './IProject';
import { ISize } from './ISize';
import './projectDisplay.scss';
import { Section } from "../common/Section/Section";
import { Icon } from "../common/Icon";
import { useRef } from 'react';

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
        const sliderRef = useRef<HTMLDivElement>(null);
        const SCROLL_INTERVAL = 400;


        function onSlide(direction: 'left' | 'right') {
            if (sliderRef.current) {
                const nextLeftValue = direction === 'left' ? sliderRef.current.scrollLeft - SCROLL_INTERVAL : sliderRef.current.scrollLeft + SCROLL_INTERVAL;

                sliderRef.current.scrollTo({
                    left: nextLeftValue,
                    behavior: 'smooth'
                });
            }
        }


        return (
            <Section className={'Projects'} title={'My Projects'} icon={Icon.Implementation}>
                <div className={'ProjectDisplay'}>
                    <img onClick={() => onSlide('left')} alt="Scroll left" src="/assets/icons/chevron_left.svg" />
                    <img onClick={() => onSlide('right')} alt='Scroll right' src="/assets/icons/chevron_right.svg" />
                    <div ref={sliderRef} className={'project_container'}>
                        {projects.map((project, index) => {
                            return <ProjectCard key={project.title} project={project} onProjectSelected={() => onProjectSelected(index)} />
                        })}
                    </div>
                </div>
            </Section>
        )
    };
