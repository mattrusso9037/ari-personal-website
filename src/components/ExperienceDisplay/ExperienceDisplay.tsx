import * as React from 'react';
import { Section } from '../common/Section/Section';
import './experienceDisplay.scss';


export interface IExpItem {
    date: string;
    title: string;
    position?: string;
}

export const ExperienceDisplay: React.FC = () => {
    return (
        <Section title={''} className={'ExperienceDisplay'}>
            <div className={'ExperienceDisplay'}>
                <div>
                    <h2>
                        Resume
                    </h2>
                    <div className='horizontal_row'>
                        <div className='resume'>
                            <picture>
                                <source srcSet="/assets/images/resume.webp" type="image/webp" />
                                <img src="/assets/images/resume.webp" alt="Ariana Brennan's Resume'" />
                            </picture>
                            <a href='https://drive.google.com/file/d/16TK_bU7NnIXFAkOdvOFT7034xlpWDOaa/view' target='_blank'>Download Resume</a>
                        </div>
                    </div>
                    <div className='certificate_badge'>
                        <img src="/assets/images/google-ux-design-certificate.webp" alt="Ariana Brennan Headshot" />
                    </div>
                </div>
            </div>
        </Section>
    )
};

