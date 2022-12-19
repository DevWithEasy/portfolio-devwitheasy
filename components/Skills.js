import Image from "next/image";
import { useState } from "react";
import { AiOutlineTable, AiOutlineUnorderedList } from "react-icons/ai";
import skillCollection from "../public/data/skills";

export default function Skills(){
    const [view,setView] = useState(false)
    return(
        <div className="skills">
            <div className="skills_header">
               <h3>Skills I've Achived</h3>
               <span>
                    <AiOutlineTable size={20} onClick={()=>setView(false)}/>
                    <AiOutlineUnorderedList size={20} onClick={()=>setView(true)}/>
               </span>
            </div>

            {/*============= skills tab view ======================*/}

            {!view && <div className="skills_sets">
            {
                skillCollection.map((skill,i)=><div key={i} className="skill">
                <Image src={skill.image} alt={skill.alt} height={50} width={50}/>
                <span>{skill.name}</span>
                <span className={skill.percent=='Junior' ? 'skill_progress junior' : skill.percent=='Mid Level'  ?'skill_progress mid_level' : 'skill_progress expert'}>{skill.percent}</span>
            </div>)
            }
            </div>}

            {/*============= skills list view ======================*/}

            {view && <div className="md:grid md:grid-cols-3 gap-y-4 gap-x-5">
            {
                skillCollection.map((skill,i)=><div key={i} >
                <div className="flex justify-between py-3 border-b dark:border-gray-500">
                    <div className="flex space-x-2 items-center">
                        <Image src={skill.image} alt={skill.alt} height={20} width={20}/>
                            <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className={skill.percent=='Junior' ? 'text-sm font-serif text-orange-500' : skill.percent=='Mid Level'  ?'text-sm font-serif text-pink-500' : 'text-sm font-serif text-green-500'}>{skill.percent}</span>
                </div>
            </div>)
            }
            </div>}
        </div>
    )
}