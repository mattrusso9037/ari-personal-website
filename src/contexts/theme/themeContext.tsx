import React, { RefObject } from "react";
import { ThemeType } from "./themeType";

export interface IThemeState {
    theme: ThemeType | null;
    setTheme: (type: ThemeType) => void;
    appRef: RefObject<HTMLDivElement> | null;
}

export const initialThemeState: IThemeState = {
    theme: ThemeType.LIGHT,
    setTheme: () => null,
    appRef: null,
};

export const ThemeContext = React.createContext<IThemeState>(initialThemeState);