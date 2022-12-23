import Image from "next/image"
import { useState } from "react"
import skillCollection from "../public/data/skills"
import Heading from "./helper/Heading"

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

            <Heading text="contact"/>
            
             <div className="select">
                <button onClick={()=>skillHandler('All')} className={active==0 ? "active" : "inactive"}>All</button>
                <button onClick={()=>skillHandler('Language')} className={active==1 ? "active" : "inactive"}>Language</button>
                <button onClick={()=>skillHandler('Framework')} className={active==2 ? "active" : "inactive"}>Frameworks</button>
                <button onClick={()=>skillHandler('Database')} className={active==3 ? "active" : "inactive"}>Database</button>
             </div>
             <div className="all_skills">
                {
                    skills.map(((skill,i)=><div key={i} className="skill">
                        <div className="skill_info">
                            <p className="">
                                <Image src={skill.image} alt={skill.name} height={30} width={30}/>
                                <span>{skill.name}</span>
                            </p>
                            <span className="">{skill.percent}</span>
                        </div>
                        <div className="skill_percentage" style={{width : skill.percent}}></div>
                    </div>))
                }
             </div>
        </div>
    )
}