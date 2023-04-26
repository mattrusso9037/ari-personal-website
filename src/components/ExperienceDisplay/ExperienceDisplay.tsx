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
                    <div className='horizontal_row'>
                        <div className='resume'>
                            <span>
                                <a href='https://drive.google.com/file/d/1T6W42364kEFnrYd0b7kWfYtzswoKR1hi/view' target='_blank'>
                                    Download Resume
                                <img alt={'Open'} src={`/assets/icons/open_in_new.svg`}></img>
                                    
                                    </a>
                            </span>
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

