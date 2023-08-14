import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Sections } from './SectionTypes';
import { useScroll } from '../../hooks/useScroll';
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay';
import { projectsNew } from '../ProjectDisplay/projectConfiguration';
import { Footer } from '../Footer/Footer';
import { AboutMeCTA } from '../AboutMeCta/AboutMeCTA';
import { ProjectModalBody } from '../ProjectDisplay/ProjectModal/ProjectModalBody';
import { Modal } from '../common/Modal/Modal';
import { ThemeContext } from '../../contexts/theme/themeContext';
import { AppContext, IAppState } from '../../contexts/app/appContext';
import {Section} from "../common/Section/Section";

function App() {
    const { getRef, scrollToElement } = useScroll();
    const { appRef } = useContext(ThemeContext);
    const { showModal, setShowModal, projectIndex } = useContext<IAppState>(AppContext);
    
    return (
        <div>
            <div ref={appRef} className={`App`}>
                <>
                    <Header onAboutClick={scrollToElement}>Hi I'm Ariana, a UX designer<br />from Long Island, New York.</Header>
                    <div className={'main_content'}>
                        <Section title={''}>
                            <ProjectDisplay title={'My Projects'} />
                            <AboutMeCTA aboutRef={getRef(Sections.About)} />
                        </Section>
                        <Footer />
                    </div>
                </>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ProjectModalBody project={projectsNew[projectIndex]} />
            </Modal>
        </div>
    );
}

export default App;
