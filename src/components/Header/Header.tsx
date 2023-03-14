import React, { FC, useContext } from 'react';
import './header.scss';
import { ScrollTo } from '../../hooks/useScroll';
import { ThemeContext } from '../../contexts/theme/themeContext';
import { ThemeType } from '../../contexts/theme/themeType';

interface IHeaderProps {
    onAboutClick?: ScrollTo;
}

export const Header: FC<IHeaderProps> =
    ({
        children
    }) => {
        const { theme, setTheme } = useContext(ThemeContext);

        function onThemeClick() {
            let nextTheme: ThemeType;

            if (theme === ThemeType.LIGHT) {
                nextTheme = ThemeType.DARK;
            } else {
                nextTheme = ThemeType.LIGHT;
            }

            setTheme(nextTheme);
        }

        return (
            <div className={'Header'}>
                <h1>{children}</h1>
            </div>
        )
    };
