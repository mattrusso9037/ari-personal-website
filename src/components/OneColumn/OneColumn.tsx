import * as React from 'react';
import './oneColumn.scss';

interface IProps {
    topRow: JSX.Element;
    bottomRow?: JSX.Element;
}
export const OneColumn: React.FC<IProps> = ({topRow, bottomRow}) => {
    return (
        <div className={`OneColumn`}>
            <div className='row_1'>
                {topRow}
            </div>
            <div className='row_2'>
                {bottomRow}
            </div>
        </div>
    );
};
