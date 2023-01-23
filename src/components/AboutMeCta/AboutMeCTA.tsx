import * as React from 'react';
import { Button } from '../common/Button/Button';
import { Section } from "../common/Section/Section";
import { MutableRefObject } from "react";
import './aboutMeCta.scss';
import { useNavigate } from "react-router-dom";

interface IAboutMeCTAProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

export const AboutMeCTA: React.FC<IAboutMeCTAProps> = ({ aboutRef }) => {
    const navigate = useNavigate();

    return (
        <Section locationRef={aboutRef} className={'AboutMeCta'} title={'About Me'}>
            <div className={'AboutMeCta'}>
                <div className={'card-container'}>
                    During my undergraduate studies, I majored in Psychology and eventually went on to obtain my Masters degree in Forensic Psychology. Once I landed my first job in the mental health field, I ended up taking on an unexpected role and realized my passion in art and my overall creativity had been stifled throughout my college career. That's when I decided to dive back into creating, starting with drawing using pencil and paper and then to digital illustration. After doing some of my own investigating, I came upon User Experience Design and recognized the role psychology and research played in this realm of technology, and I had a light bulb moment...
                    <Button type={'secondary'} text={'Learn More'} onClick={() => navigate('/about')} />
                </div>
                <div>
                    <picture>
                        <source srcSet="/assets/images/ariana_1.webp" type="image/webp" />
                        <img src="/assets/images/ariana_1.webp" alt="Ariana Brennan Headshot" />
                    </picture>
                    <h3>About Me</h3>
                </div>
            </div>
        </Section>
    )
};
