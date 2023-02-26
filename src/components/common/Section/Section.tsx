import React, { FC, MutableRefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import './section.scss';
import { Icon } from "../Icon";
import { ThemeContext } from "../../../contexts/theme/themeContext";
import * as _ from 'lodash';

interface ISectionProps {
    title: string;
    className?: string;
    icon?: Icon;
    locationRef?: MutableRefObject<any>;
}

const THROTTLE_TIME: number = 100;

export const Section: FC<ISectionProps> = ({ className, title, locationRef, children }) => {
    const { appRef } = useContext(ThemeContext);
    const [inView, setInView] = useState<boolean>(false);
    const hasBeenToggled = useRef<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            toggleViewStateTrue();
        }, 100);
    }, [])

    // useEffect(() => {
    //     if (appRef?.current) {
    //         if (elementIsInView(ref.current)) {
    //             toggleViewStateTrue();
    //         }

    //         appRef.current.addEventListener('scroll', _.throttle(onScroll, THROTTLE_TIME));
    //     }

    //     return () => {
    //         appRef?.current?.removeEventListener('scroll', _.throttle(onScroll, THROTTLE_TIME))
    //     }
    // }, []);

    function onScroll(e: Event) {
        if (!hasBeenToggled.current) {
            if (elementIsInView(ref.current)) {
                toggleViewStateTrue();
            }
        }
    }

    function toggleViewStateTrue() {
        setInView(true);
        hasBeenToggled.current = true;
    }

    function elementIsInView(innerSectionDiv: HTMLDivElement | null) {
        if (!innerSectionDiv) return;
        const innerSectionRect = innerSectionDiv.getBoundingClientRect();
        const originalSectionPosition = innerSectionRect.top - window.innerHeight;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        return originalSectionPosition < viewportHeight;
    }

    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={locationRef} className={`Section ${className}`}>
            <div ref={ref} className={`section_inner ${inView ? 'in_view' : ''}`}>
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

