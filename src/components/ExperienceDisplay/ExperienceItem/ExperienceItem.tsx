import React, {FC} from 'react';
import { IExpItem } from '../ExperienceDisplay';

interface IProps {
    item: IExpItem;
}

export const ExperienceItem: FC<IProps> = ({ item }) => {
    return (
        <div className={`ExpItem`}>
            <div className='date'>{item.date}</div>
            <div className={`title${item.position ? 'italic' : ''}`}>{item.title}</div>
            {item.position && <div className='position'>{item.position}</div>}
        </div>
    )
};
