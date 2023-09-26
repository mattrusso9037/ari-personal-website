import { Section } from "../ProjectModal/Section"
import { Project, SectionTitle } from "../projectConfiguration"
import React from 'react';

interface IProps {
    project: Project;
}

export const DesignConceptImages: React.FC<IProps> = ({ project }) => {
    return (
        <div className='img-container'>
            {project.initialDesignConceptsImages.map((partialPath) => <img src={`assets/projects/${partialPath}`} />)}
        </div>

    )
}