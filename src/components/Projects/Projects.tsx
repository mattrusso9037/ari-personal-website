import * as React from 'react';
import { useContext } from 'react';
import { IAppState, AppContext } from '../../contexts/app/appContext';
import { Modal } from '../common/Modal/Modal';
import { projects, projectsNew } from '../ProjectDisplay/projectConfiguration';
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay';
import { ProjectModalBody } from '../ProjectDisplay/ProjectModal/ProjectModalBody';
import './projects.scss';
import { Header } from '../Header/Header';

export const Projects: React.FC =
    ({
    }) => {
        const { showModal, setShowModal, projectIndex } = useContext<IAppState>(AppContext);
        console.log('proj', projectsNew[projectIndex])
        return (
            <div className='ProjectsPage'>
                <Header>Projects</Header>
                <ProjectDisplay />
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <ProjectModalBody project={projectsNew[projectIndex]} />
                </Modal>
            </div>
        );
    };
