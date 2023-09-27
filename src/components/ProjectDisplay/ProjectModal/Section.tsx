import React from 'react';
import './section.scss';

interface IProps {
    title?: string;
    content?: string | JSX.Element;
    /**Deprecated */
    images?: string[];
    /**Deprecated */
    openLink?: (url: string) => void;
}
export const Section: React.FC<IProps> = ({title, content, images, openLink}) => {
    return (
        <div className={`ProjectSection ${title?.replaceAll(' ', '')}`}>
            {title && <h4>{title}</h4>}
            {content && <div>{content}</div>}
            {images && <div  className='img-container'>{images.map((img) => <img alt={`${title ?? 'Designs'}`} onClick={() => openLink(`assets/projects/${img}`)} width={'100%'} src={`assets/projects/${img}`} />)}</div>}
        </div>
    );
 }
