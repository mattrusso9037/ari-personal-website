import React, { FC, useContext } from 'react';
import './about.scss';
import { Section } from '../common/Section/Section';
import { Icon } from '../common/Icon';
import { ExperienceDisplay } from "../ExperienceDisplay/ExperienceDisplay";
import { Footer } from '../Footer/Footer';
import { ThemeContext } from '../../contexts/theme/themeContext';
import { Header } from '../Header/Header';

export const About: FC = () => {
    const { appRef } = useContext(ThemeContext);

    return (
        <div ref={appRef} className={`App`}>
            <>
                <Header>About Me</Header>
                <Section className={'About Me'} icon={Icon.Person}>
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
                            I have a background in Psychology and a passion for creating engaging, user-focused experiences via web and mobile applications. My knowledge and experience in psychology brings a deep understanding of human behavior and motivation to my work in UX design. 

I have experience working in the nonprofit sector, from mental health services to websites and digital media. I had the opportunity to apply my skills through freelance work for a new local nonprofit, where I designed their website from wireframes and prototypes to launch with a team of developers, keeping the user top-of-mind. 

I’m proficient in Figma and Adobe Creative Suite, and I’m always eager to learn new tools and techniques. In my free time, I enjoy experimenting with new design tools and refining my skills with side projects. My goal is to continue growing as a UX designer and to work on projects that make a positive impact on people's lives.
                            </div>
                        </div>
                    </div>
                </Section>
                <ExperienceDisplay />
                <Footer />
            </>
        </div>
    )
};
