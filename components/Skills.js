import Image from "next/image";
import skillCollection from "../public/data/skills";

export default function Skills(){
    return(
        <div className="skills">
            <h3>Skills I've Achived</h3>
            {/* <div className="skills_sets">
            {
                skillCollection.map((skill,i)=><div key={i} className="skill">
                <Image src={skill.image} alt={skill.alt} height={50} width={50}/>
                <span>{skill.name}</span>
            </div>)
            }
            </div> */}
            <div className="md:grid md:grid-cols-3 gap-4">
            {
                skillCollection.map((skill,i)=><div key={i} >
                <div className="flex justify-between py-3">
                    <div className="flex space-x-2 items-center">
                        <Image src={skill.image} alt={skill.alt} height={20} width={20}/>
                            <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className={skill.percent=='Junior' ? skill.percent=='Mid Level' ? 'text-orange-500' : 'text-pink-500' : 'text-green-500'}>{skill.percent}</span>
                </div>
            </div>)
            }
            </div>
        </div>
    )
}