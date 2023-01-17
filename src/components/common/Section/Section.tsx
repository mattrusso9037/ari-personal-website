import React, {FC, MutableRefObject} from "react";
import './section.scss';
import {Icon} from "../Icon";

interface ISectionProps {
    title: string;
    className?: string;
    icon?: Icon;
    locationRef?: MutableRefObject<any>;
}

export const Section: FC<ISectionProps> = ({ className, title, locationRef, children }) => {
    return (
        <div ref={locationRef} className={`Section ${className}`}>
            <div className={'section_inner'}>
                <div className={'section_header'}>
                    <h2>{title}</h2>
                </div>
                <div className={'body'}>
                    {children}
                </div>
            </div>
        </div>

    )
};
