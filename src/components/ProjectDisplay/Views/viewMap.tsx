import { Project } from "../projectConfiguration";
import { InvenTracker } from "./inventracker/InvenTracker";
import { LTTA } from "./ltta/ltta";
import { NeighborLynk } from "./neighborlynk/NeighborLynk";
import { SimpliBudget } from "./simplibudget/SimpliBudget";
import { TheatreSnax } from "./theatresnax/TheatreSnax";


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
        render: (project: Project): JSX.Element => <SimpliBudget project={project} />
    },
    [ProjectId.THEATRE_SNAX]: {
        render: (project: Project): JSX.Element => <TheatreSnax project={project} /> 
    },
    [ProjectId.INVEN_TRACKER]: {
        render: (project: Project): JSX.Element => <InvenTracker project={project} /> 

    },
    [ProjectId.NEIGHBOR_LINK]: {
        render: (project: Project): JSX.Element => <NeighborLynk project={project} /> 

    }
}