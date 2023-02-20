import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { Section } from './Section';
import { useLocation } from 'react-router-dom';

interface IProjectModalBodyProps {
    project: IProject;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    function openLink(uri: string | undefined): void {
        uri && window.open(uri, 'blank');
    }
    
    function getUrl(): string {
        return window.location.href;
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
                        <div className={'technologies'}>
                            <div>
                                {project.technologiesUsed.map((item, index) => {
                                    return (
                                        <span className='item'>{item}</span>
                                    )
                                })}
                            </div>
                        </div>
                        </div>
                    <img onClick={() => openLink(`${getUrl()}assets/projects/${project.featuredImageUri}`)} className='featured-img' src={`assets/projects/${project.featuredImageUri}`} />
                    
                    {project.sections.map((section) => <Section openLink={openLink} title={section.title} content={section.content} images={section.images} />)}

                    <div className={'action-container'}>
                        {project.sourceControlUrl && (
                            <FontAwesomeIcon
                                color={'#F25F5C'}
                                size={'2x'}
                                icon={faGithubSquare}
                                onClick={() => openLink(project.sourceControlUrl
                                )}
                            />)}
                        {project.resourceUrl && (
                            <FontAwesomeIcon
                                color={'#F25F5C'}
                                size={'2x'}
                                icon={faExternalLink}
                                onClick={() => openLink(project.resourceUrl)}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
