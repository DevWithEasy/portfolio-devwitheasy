import projects from "../public/data/projects";
import { useState } from "react";
import Project from "./helper/Project";
import Heading from "./helper/Heading";

export default function Projects(){
    return(
        <div id="project" className="projects">

            <Heading text="my skills"/>
            
            <div className="all_project">
                {projects.map((project,i) =><Project key={i} project={project}/>)}
            </div>
            {/*============ more button here ===============*/}
            <div className="more">
                <a href="https://github.com/DevWithEasy" target="_blank" rel="noreferrer">More</a>
            </div>
        </div>
    )
}