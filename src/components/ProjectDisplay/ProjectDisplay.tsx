import * as React from 'react';
import { ProjectCard } from './ProjectTile/ProjectCard';
import './projectDisplay.scss';
import { Section } from "../common/Section/Section";
import { Icon } from "../common/Icon";
import { useContext, useRef } from 'react';
// import { projects } from './pro]jectConfiguration';
import { AppContext, IAppState } from '../../contexts/app/appContext';
import { projectsNew } from './projectConfiguration';

export const ProjectDisplay: React.FC<{title?: string}> =
    ({title}) => {
        const sliderRef = useRef<HTMLDivElement>(null);
        const SCROLL_INTERVAL = 400;
        const { onProjectSelected } = useContext<IAppState>(AppContext);

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
            <Section className={'Projects'} title={title ?? ''} icon={Icon.Implementation}>
                <div className={'ProjectDisplay'}>
                    <img onClick={() => onSlide('left')} alt="Scroll left" src="/assets/icons/chevron-left.svg" />
                    <img onClick={() => onSlide('right')} alt='Scroll right' src="/assets/icons/chevron-right.svg" />
                    <div ref={sliderRef} className={'project_container'}>
                        {projectsNew.map((project, index) => {
                            return <ProjectCard key={project.title} project={project} onProjectSelected={() => onProjectSelected(index)} />
                        })}
                    </div>
                </div>
            </Section>
        )
    };
