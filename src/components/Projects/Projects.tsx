import * as React from 'react';
import { useContext } from 'react';
import { IAppState, AppContext } from '../../contexts/app/appContext';
import { Modal } from '../common/Modal/Modal';
import { projects } from '../ProjectDisplay/projectConfiguration';
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay';
import { ProjectModalBody } from '../ProjectDisplay/ProjectModal/ProjectModalBody';
import './projects.scss';

export const Projects: React.FC =
    ({
    }) => {
        const { showModal, setShowModal, projectIndex } = useContext<IAppState>(AppContext);

        return (
            <div className='ProjectsPage'>
                <ProjectDisplay />
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <ProjectModalBody project={projects[projectIndex]} />
                </Modal>
            </div>
        );
    };
