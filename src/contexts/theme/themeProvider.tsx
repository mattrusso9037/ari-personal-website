import React, { useState, useEffect } from "react";
import { initialThemeState, ThemeContext } from "./themeContext";
import { ThemeType } from "./themeType";

const THEME_LOCAL_STORAGE_KEY: string = 'abrennan-theme';

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType | null>(null);
    const { localStorage } = window;

    useEffect(() => {
        const savedThemeLocal = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeType;

        if (!!savedThemeLocal) {
            setTheme(savedThemeLocal);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme--${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;