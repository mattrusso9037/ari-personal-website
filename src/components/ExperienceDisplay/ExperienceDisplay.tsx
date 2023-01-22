import * as React from 'react';
import './experienceDisplay.scss';
import {ExperienceItem} from './ExperienceItem/ExperienceItem';


export interface IExpItem {
    date: string;
    title: string;
    position?: string;
}


const jobs: IExpItem[] = [
    {
        date: 'March 2022 - Present',
        title: 'Listen to the Angels',
        position: 'Freelance UX/UI Designer',
    },
    {
        date: 'March 2021 - December 2022',
        title: 'Listen to the EAC Network',
        position: 'Crisis Counselor & Media Coordinator',
    },
];

const educationItems: IExpItem[] = [
    {
        date: 'January 2023',
        title: 'Google UX Design Professional Certificate',
    },
    {
        date: 'January 2021',
        title: 'John Jay College of Criminal Justice',
        position: 'MA Forensic Psychology',
    },
    {
        date: 'August 2015',
        title: 'Stony Brook University',
        position: 'BA Psychology',
    },
];

export const ExperienceDisplay: React.FC = () => {
    return (
            <div className={'ExperienceDisplay'}>
                <div>
                    <h2>
                        Experience & Resume
                    </h2>
                    <div className='horizontal_row'>
                        <div className='experience_items'>
                            {jobs.map((item) => <ExperienceItem item={item} />)}
                            <div className='subtitle'>Education & Certifications</div>
                            {educationItems.map((item) => <ExperienceItem item={item} />)}
                        </div>
                        <div className='resume'>
                            <iframe width="400" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8j0JcVKfX8bwywogoWipef%2FResume%3Fnode-id%3D502%253A48%26t%3D3rJj5j5MUCQNmL67-1"></iframe>
                            <a href='https://drive.google.com/file/d/16TK_bU7NnIXFAkOdvOFT7034xlpWDOaa/view' target='_blank'>Download Resume</a>
                        </div>
                    </div>
                    <div className='certificate_badge'>
                        <img src="/assets/images/ariana_2.webp" alt="Ariana Brennan Headshot" />
                    </div>
                </div>
            </div>
    )
};

