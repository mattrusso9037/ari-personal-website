import React, { FC, useEffect } from 'react';
import './about.scss';
import { Section } from '../common/Section/Section';
import { Icon } from '../common/Icon';
import { ExperienceDisplay } from "../ExperienceDisplay/ExperienceDisplay";
import { Contact } from '../Contact/Contact';

export const About: FC = () => {

    useEffect(() => {
        setTimeout(() => {
            const navBar = document.getElementsByClassName('Navbar')[0];
            // TODO: Investigate why nav bar is hidden on about page sometimes.
            navBar?.classList.add('show');
        }, 500);
    }, []);
    return (
        <div className={`App`}>
            <>
                <Section className={'About Me'} title={'About Me'} icon={Icon.Person}>
                    <div>
                        <div className='tagline_container'>
                        <h2>I hope to use my knowledge and skills from my background in psychology to make an impact in UX design.</h2>
                        <picture>
                            <source srcSet="/assets/images/ariana_2.webp" type="image/webp" />
                            <img src="/assets/images/ariana_2.webp" alt="Ariana Brennan Headshot" />
                        </picture>
                        </div>
                        <div className={'description_container'}>
                            <h2>I hope to use my knowledge and skills from my background in psychology to make an impact in UX design.</h2>
                            <div>
                                I have a strong background in Psychology, with a Masters in Forensic Psychology from John Jay College of Criminal Justice and Bachelors in Psychology from Stony Brook University. I have worked as a crisis counselor with a nonprofit for a program funded by FEMA in response to the pandemic for almost 2 years, providing support to the community and anyone struggling with the many challenges brought on by COVID. With this program, I was in charge of media development and social media campaigns, creating visuals for upcoming events, presentations and other media. I have recently completed the Google UX Design Certificate course through Coursera and have refreshed my research design and methodology skills through usability research. I hope to use my empathy and interest in the human mind and behavior to make an impact in the UX design space. In my free time, I enjoy spending time with my family, being outside, and diving deeper into my creativity with side projects.
                            </div>
                        </div>
                    </div>
                </Section>
                <ExperienceDisplay />
                <Contact />
            </>
        </div>
    )
};
