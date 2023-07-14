import { IProject } from "../../IProject"
import { projects } from "../../projectConfiguration"

export const ListenToTheAngels: React.FC = () => {
    const project = projects[0];
    console.log(project)
    return <section>LTTA</section>
}