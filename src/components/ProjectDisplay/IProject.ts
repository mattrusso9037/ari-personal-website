import {FunctionComponent} from "react";
import { ProjectId } from "./Views/viewMap";

export interface IProject {
    id: ProjectId;
    title: string;
    description: string;
    overview: string;
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