import React from "react";

export interface IAppState {
    setShowNav: (showNav: boolean) => void;
    showNav: boolean;
    onProjectSelected: (id: number) => void;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    projectIndex: number;
}

export const initialThemeState: IAppState = {
    setShowNav: (showNav: boolean) => {},
    showNav: true,
    onProjectSelected: () => {},
    showModal: false,
    setShowModal: (show: boolean) => {},
    projectIndex: -1,
};

export const AppContext = React.createContext<IAppState>(initialThemeState);