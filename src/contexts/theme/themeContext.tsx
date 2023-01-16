import React from "react";
import { ThemeType } from "./themeType";

export interface IThemeState {
    theme: ThemeType;
    setTheme: () => void;
}

export const initialThemeState: IThemeState = {
    theme: ThemeType.LIGHT,
    setTheme: () => null
};

export const ThemeContext = React.createContext({});