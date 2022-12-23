import projects from "../public/data/projects";
import { useState } from "react";
import Project from "./Project";

export default function Projects(){
    return(
        <div id="project" className="space-y-5">
            <div className="flex justify-center items-center py-5">
                <div className="w-8/12 md:w-1/2 flex justify-between items-center">
                    <hr className="w-1/4"/>
                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">MY WORKS</div>
                    <hr className="w-1/4"/>
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-4 space-y-5 md:space-y-0">
                {projects.map((project,i) =><Project key={i} project={project}/>)}
            </div>
            {/*============ more button here ===============*/}
            <div className="text-center">
                <a href="https://github.com/DevWithEasy" target="_blank" rel="noreferrer" className="text-center px-5 py-3 rounded border-2 border-green-500 hover:bg-green-500 transtion-all duration-500">More</a>
            </div>
        </div>
    )
}