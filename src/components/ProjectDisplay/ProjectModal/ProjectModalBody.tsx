import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import { Section } from './Section';
interface IProjectModalBodyProps {
    project: IProject;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    function openLink(partialPath: string | undefined): void {
        const baseUrl = getUrl();
        partialPath && window.open(`${baseUrl}/${partialPath}`, 'blank');
    }
    
    function getUrl(): string {
        return window.location.origin;
    }

    return (
        <div className={`ProjectModalBody ${project.title.replaceAll(' ', '')}`}>
            <div>
                <div className={`content`}>
                    <div className='heading_container'>
                        <h2>{project.title}</h2>
                        <h2 className={'description'}>
                            {project.description}
                        </h2>
                    </div>
                    <img alt={`${project.title} featured image`} onClick={() => openLink(`assets/projects/${project.featuredImageUri}`)} className='featured-img' src={`assets/projects/${project.featuredImageUri}`} />
                    
                    {project.sections.map((section) => <Section openLink={openLink} title={section.title} content={section.content} images={section.images} />)}
  
                    <section className='btn-container'>
                        <button>Prev</button>
                        <button>Next</button>
                    </section>
                </div>
            </div>
        </div>
    );
};
