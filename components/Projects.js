import projects from "../public/data/projects";
import Project from "./Project";

export default function Projects(){

    return (
        <div className="projects">
            {projects.map((project,i)=><Project key={i} project={project}/>)}
        </div>
    )
}