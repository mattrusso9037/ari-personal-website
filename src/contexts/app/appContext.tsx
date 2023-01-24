import React from "react";

export interface IAppState {
    setShowNav: (showNav: boolean) => void;
    showNav: boolean;
}

export const initialThemeState: IAppState = {
    setShowNav: (showNav: boolean) => {},
    showNav: true,
};

export const AppContext = React.createContext<IAppState>(initialThemeState);