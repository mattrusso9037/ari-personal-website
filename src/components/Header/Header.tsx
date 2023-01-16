import React, { FC, useContext } from 'react';
import './header.scss';
import { ScrollTo } from '../../hooks/useScroll';
import { Sections } from '../Main/SectionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from '../../contexts/theme/themeContext';
import { ThemeType } from '../../contexts/theme/themeType';

interface IHeaderProps {
    onAboutClick: ScrollTo
}

export const Header: FC<IHeaderProps> =
    ({
        onAboutClick,
    }) => {
        const { theme, setTheme } = useContext(ThemeContext);

        function onClick(): void {
            onAboutClick(Sections.About);
        }

        function onThemeClick() {
            let nextTheme: ThemeType;

            if (theme === ThemeType.LIGHT) {
                nextTheme = ThemeType.DARK;
            } else {
                nextTheme = ThemeType.LIGHT;
            }

            console.log('THEME', nextTheme);

            setTheme(nextTheme);
        }

        return (
            <div className={'Header'}>
                <div>
                    <div>
                        <h1>Hi I'm Ariana, an aspiring UX designer<br />from Long Island, New York.</h1>
                        <button onClick={onThemeClick}>Toggle Theme</button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={'fa-thin'} onClick={onClick} icon={faChevronDown} color={'white'} size={'3x'} />
                    </div>
                </div>
            </div>
        )
    };
