import {FunctionComponent} from "react";

export interface IProject {
    title: string;
    description: string;
    technologiesUsed: string[];
    sections: ISection[];
    featuredImageUri: string;
    thumbnailImageUri: string;
    view?: JSX.Element | FunctionComponent<{}>;
    sourceControlUrl?: string;
    resourceUrl?: string;
}

export interface ISection {
    title?: string;
    content?: string | JSX.Element;
    images?: string[];      
}