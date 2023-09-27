import * as React from 'react';
import './twoColumn.scss';

interface IProps {
    leftColumn: JSX.Element;
    rightColumn?: JSX.Element;
}
export const TwoColumn: React.FC<IProps> = ({leftColumn, rightColumn}) => {
    return (
        <div className={`TwoColumn`}>
            <div className='col_1'>
                {leftColumn}
            </div>
            <div className='col_2'>
                {rightColumn}
            </div>
        </div>
    );
};
