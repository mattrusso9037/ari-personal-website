import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Sections } from './SectionTypes';
import { useScroll } from '../../hooks/useScroll';
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay';
import { mockProjects } from '../ProjectDisplay/mockProjects';
import { Contact } from '../Contact/Contact';
import { AboutMeCTA } from '../AboutMeCta/AboutMeCTA';
import { CompanyDisplay } from '../CompanyDisplay/CompanyDisplay';
import { ProjectModalBody } from '../ProjectDisplay/ProjectModal/ProjectModalBody';
import { Modal } from '../common/Modal/Modal';
import { Login } from '../Login/Login';
import { ThemeContext } from '../../contexts/theme/themeContext';

function App() {
    const { getRef, scrollToElement } = useScroll();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { appRef, onScroll } = useContext(ThemeContext);

    function onProjectSelected(index: number): void {
        setProjectIndex(index);
        setShowModal(true);
    }


    useEffect(() => {
        const navBar = document.getElementsByClassName('Navbar')[0];

        if (showModal) {
            setTimeout(() => {
                navBar?.classList.add('hide');
            }, 700);
        } else {
            navBar?.classList.remove('hide');
        }
    }, [showModal]);

    return (
        <div>
            <div onScroll={onScroll} ref={appRef} className={`App`}>
                <>
                    <Header onAboutClick={scrollToElement} />
                    <div className={'main_content'}>
                        <ProjectDisplay
                            onProjectSelected={onProjectSelected}
                            projects={mockProjects}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                        <AboutMeCTA aboutRef={getRef(Sections.About)} />
                        <Contact />
                    </div>
                </>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ProjectModalBody project={mockProjects[projectIndex]} />
            </Modal>
        </div>
    );
}

export default App;
