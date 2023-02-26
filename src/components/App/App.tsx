import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Sections } from './SectionTypes';
import { useScroll } from '../../hooks/useScroll';
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay';
import { projects } from '../ProjectDisplay/projectConfiguration';
import { Footer } from '../Footer/Footer';
import { AboutMeCTA } from '../AboutMeCta/AboutMeCTA';
import { ProjectModalBody } from '../ProjectDisplay/ProjectModal/ProjectModalBody';
import { Modal } from '../common/Modal/Modal';
import { ThemeContext } from '../../contexts/theme/themeContext';
import { AppContext } from '../../contexts/app/appContext';
import { useLocation, useSearchParams } from 'react-router-dom';

function App() {
    const { getRef, scrollToElement } = useScroll();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { appRef } = useContext(ThemeContext);
    const { setShowNav } = useContext(AppContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    function onProjectSelected(index: number): void {
        setSearchParams({
            id: index.toString(),
        });
        location.search = searchParams.toString();
    }

    useEffect(() => {
        if (!showModal) {
            setSearchParams({});
        }
        setShowNav(!showModal);
    }, [showModal]);


    useEffect(() => {
        const id = searchParams.get('id');

        if (id) {
            setProjectIndex(Number(id));
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [location.search]);

    return (
        <div>
            <div ref={appRef} className={`App`}>
                <>
                    <Header onAboutClick={scrollToElement} />
                    <div className={'main_content'}>
                        <ProjectDisplay
                            onProjectSelected={onProjectSelected}
                            projects={projects}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                        <AboutMeCTA aboutRef={getRef(Sections.About)} />
                        <Footer />
                    </div>
                </>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ProjectModalBody project={projects[projectIndex]} />
            </Modal>
        </div>
    );
}

export default App;
