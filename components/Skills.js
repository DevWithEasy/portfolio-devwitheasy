import Image from "next/image"
import { useState } from "react"
import skillCollection from "../public/data/skills"

export default function Skills(){
    const [active,setActive] = useState(0)
    const [skills,setSkills] = useState(skillCollection)
    function skillHandler (type){
        if(type == "Language"){
            const find = skillCollection.filter(skill => skill.type == type)
            setSkills(find);
            setActive(1)
        }
        if(type == "Framework"){
            const find = skillCollection.filter(skill => skill.type == type)
            setSkills(find);
            setActive(2)
        }
        if(type == "Database"){
            const find = skillCollection.filter(skill => skill.type == type)
            setSkills(find);
            setActive(3)
        }
        if(type == "All"){
            setSkills(skillCollection);
            setActive(0)
        }
    }
    return (
        <div id="skill" className="skills">
            <div className="flex justify-center items-center py-5">
                <div className="w-8/12 md:w-1/2 flex justify-between items-center">
                    <hr className="w-1/4"/>
                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">MY SKILLS</div>
                    <hr className="w-1/4"/>
                </div>
            </div>
             <div className="">
                <button onClick={()=>skillHandler('All')} className={active==0 ? "m-1 px-4 py-2 bg-green-500 border-2 border-green-500 rounded text-center  hover:bg-green-500 transition-all duration-500" : "m-1 px-4 py-2 border-2 border-green-500 rounded text-center hover:bg-green-500 transition-all duration-500"}>All</button>
                <button onClick={()=>skillHandler('Language')} className={active==1 ? "m-1 px-4 py-2 bg-green-500 border-2 border-green-500 rounded text-center  hover:bg-green-500 transition-all duration-500" : "m-1 px-4 py-2 border-2 border-green-500 rounded text-center hover:bg-green-500 transition-all duration-500"}>Language</button>
                <button onClick={()=>skillHandler('Framework')} className={active==2 ? "m-1 px-4 py-2 bg-green-500 border-2 border-green-500 rounded text-center  hover:bg-green-500 transition-all duration-500" : "m-1 px-4 py-2 border-2 border-green-500 rounded text-center hover:bg-green-500 transition-all duration-500"}>Frameworks</button>
                <button onClick={()=>skillHandler('Database')} className={active==3 ? "m-1 px-4 py-2 bg-green-500 border-2 border-green-500 rounded text-center  hover:bg-green-500 transition-all duration-500" : "m-1 px-4 py-2 border-2 border-green-500 rounded text-center hover:bg-green-500 transition-all duration-500"}>Database</button>
             </div>
             <div className="md:grid md:grid-cols-2 md:gap-4 space-y-2 md:space-y-0">
                {
                    skills.map(((skill,i)=><div key={i} className="bg-slate-800 rounded">
                        <div className="flex justify-between items-center px-2 py-4">
                            <p className="flex items-center space-x-2">
                                <Image src={skill.image} alt={skill.name} height={30} width={30}/>
                                <span className="text-xl font-bold">{skill.name}</span>
                            </p>
                            <span className="px-3 py-2 bg-green-500 rounded-md font-bold">{skill.percent}</span>
                        </div>
                        <div className="h-2 bg-green-500 rounded" style={{width : skill.percent}}></div>
                    </div>))
                }
             </div>
        </div>
    )
}