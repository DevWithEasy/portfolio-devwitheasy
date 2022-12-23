import projects from "../../public/data/projects";
import Project from "./Project";

export default function Projects(){

    return (
        <div className="v1_projects">
            {projects.map((project,i)=><Project key={i} project={project}/>)}
        </div>
    )
}