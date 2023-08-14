import { Project } from "../projectConfiguration";
import { LTTA } from "./ltta";


export enum ProjectId {
    LTTA,
    SIMPLI_BUDGET,
    THEATRE_SNAX,
    INVEN_TRACKER,
    NEIGHBOR_LINK,
}

export const ViewMap: Record<ProjectId, {render: (project: Project) => JSX.Element}> = {
    [ProjectId.LTTA]: {
        render: (project: Project) => <LTTA project={project} />
    },
    [ProjectId.SIMPLI_BUDGET]: {
        render: function (project: Project): JSX.Element {
            throw new Error("Function not implemented.");
        }
    },
    [ProjectId.THEATRE_SNAX]: {
        render: function (project: Project): JSX.Element {
            throw new Error("Function not implemented.");
        }
    },
    [ProjectId.INVEN_TRACKER]: {
        render: function (project: Project): JSX.Element {
            throw new Error("Function not implemented.");
        }
    },
    [ProjectId.NEIGHBOR_LINK]: {
        render: function (project: Project): JSX.Element {
            throw new Error("Function not implemented.");
        }
    }
}