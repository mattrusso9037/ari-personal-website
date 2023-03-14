import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import './section.scss';
import { Icon } from "../Icon";

interface ISectionProps {
    title?: string;
    className?: string;
    icon?: Icon;
    locationRef?: MutableRefObject<any>;
}

export const Section: FC<ISectionProps> = ({ className, title, locationRef, children }) => {
    const [inView, setInView] = useState<boolean>(false);
    const hasBeenToggled = useRef<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            toggleViewStateTrue();
        }, 100);
    }, [])

    function toggleViewStateTrue() {
        setInView(true);
        hasBeenToggled.current = true;
    }

    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={locationRef} className={`Section ${className}`}>
            <div ref={ref} className={`section_inner ${inView ? 'in_view' : ''}`}>
                {title && <div className={'section_header'}>
                    <h2>{title}</h2>
                </div>}
                <div className={'body'}>
                    {children}
                </div>
            </div>
        </div>

    )
};

