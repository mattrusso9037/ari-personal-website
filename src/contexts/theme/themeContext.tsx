import React from "react";
import { ThemeType } from "./themeType";

export interface IThemeState {
    theme: ThemeType | null;
    setTheme: (type: ThemeType) => void;
}

export const initialThemeState: IThemeState = {
    theme: ThemeType.LIGHT,
    setTheme: () => null
};

export const ThemeContext = React.createContext<IThemeState>(initialThemeState);