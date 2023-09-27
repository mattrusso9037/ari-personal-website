import * as React from 'react';
import './pill.scss';

interface IProps {
    label: string;
}

export const Pill: React.FC<IProps> = ({ label }) => {
    return (
        <label className='Pill'>
            {label}
        </label>
    );
};