import React from 'react';
import './section.scss';

interface IProps {
    title?: string;
    content?: string | JSX.Element;
    images?: string[];
}
export const Section: React.FC<IProps> = ({title, content, images}) => {
    return (
        <div className='ProjectSection'>
            <h4>{title}</h4>
            <div>{content}</div>
            {images && <div className='img-container'>{images.map((img) => <img width={'100%'} src={`assets/projects/${img}`} />)}</div>}
        </div>
    );
 }
