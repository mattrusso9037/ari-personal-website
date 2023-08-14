import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import { Section } from './Section';
import { Button } from '../../common/Button/Button';
import { useContext, useRef } from 'react';
import { AppContext } from '../../../contexts/app/appContext';
import { Project, projects, projectsNew } from '../projectConfiguration';
import { Pill } from '../../Pill/Pill.tsx/Pill';
import { ViewMap } from '../Views/viewMap';
interface IProjectModalBodyProps {
    project: Project;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { onProjectSelected, projectIndex } = useContext(AppContext);

    function openLink(partialPath: string | undefined): void {
        const baseUrl = getUrl();
        partialPath && window.open(`${baseUrl}/${partialPath}`, 'blank');
    }
    
    function getUrl(): string {
        return window.location.origin;
    }

    function onDirectionClick(direction: 'prev' | 'next') {
        let nextIndex;
        if (direction === 'prev') {
            nextIndex = projectIndex - 1;
        } else {
            nextIndex = projectIndex + 1;
        }
        
        if (nextIndex > -1 && nextIndex < projects.length) {
            onProjectSelected(nextIndex);
            ref.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
      
    }
    // const proj2 = projectsNew'
    return (
        <section className={`ProjectModalBody ${project.title.replaceAll(' ', '')}`}>
            <div>
                <div ref={ref} className={`content`}>
                    <header className='heading_container'>
                        <h2>{project.title}</h2>
                        <h3 className={'description'}>
                            {project.description}
                        </h3>
                        <section className='label_container'>
                            {project.technologiesUsed.map((technology) => <Pill label={technology} />)}
                        </section>
                    </header>
                    <img alt={`${project.title} featured image`} onClick={() => openLink(`assets/projects/${project.featuredImageUri}`)} className='featured-img' src={`assets/projects/${project.featuredImageUri}`} />
                    
                    <Section title='Project Overview' content={project.overview} />
                    {ViewMap[project.id].render(project)}
                    {/* {project.sections.map((section,) => <Section openLink={openLink} title={section.title} content={section.content} images={section.images} />)} */}
                    <div className='btn-container'>
                    {projectIndex - 1 > -1 && <Button type={'secondary'} text={'Previous Project'} onClick={() => onDirectionClick('prev') } />}
                    {projectIndex + 1 < projects.length && <Button type={'secondary'} text={'Next Project'} onClick={() => onDirectionClick('next')} />}
                    </div>
                </div>
            </div>
        </section>
    );
};
