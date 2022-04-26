import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import {ProjectModalItem} from "./ProjectModalItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

interface IProjectModalBodyProps {
    project: IProject;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    function openLink(uri: string | undefined): void {
        uri && window.open(uri, 'blank');
    }

    return (
        <div className={'ProjectModalBody'}>
            <div className={'img-container'} style={{backgroundImage: `url(/assets/projects/${project.featuredImageUri})`}}>
            </div>
            <div className={'content'}>
                <h2>{project.title}</h2>
                <div>
                    <ProjectModalItem title={'What Is It'} content={project.definition}/>
                    <ProjectModalItem title={'What I Did'} content={project.responsibility}/>
                    <ProjectModalItem title={'Technologies Used'} content={project.technologiesUsed}/>
                </div>
                <div className={'action-container'}>
                    {project.sourceControlUrl && (
                        <FontAwesomeIcon
                            color={'#F25F5C'}
                            size={'2x'}
                            icon={faGithubSquare}
                            onClick={() => openLink(project.sourceControlUrl
                            )}
                        />)}
                    <FontAwesomeIcon
                        color={'#F25F5C'}
                        size={'2x'}
                        icon={faExternalLink}
                        onClick={() => openLink(project.resourceUrl)}
                    />
                </div>
            </div>
        </div>
    );
};