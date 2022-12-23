import { useState } from "react"
import Projects from "./Projects"
import Repositories from "./Repositories"

export default function Works(){
    const [active,setActive] = useState(0)
    function action_btn(value){
        setActive(value)
    };
    return (
        <div className="v1_works">
            <h3>My Works</h3>
            <div className="action_btn">
                <button onClick={()=>action_btn(0)} className={active === 0 ? 'active' : ''}>Projects</button>
                <button onClick={()=>action_btn(1)} className={active === 1 ? 'active' : ''}>All Repositories</button>
            </div>
            {active ===0 && <Projects/>}
            {active ===1 && <Repositories/>}
        </div>
    )
}