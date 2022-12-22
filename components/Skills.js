import { useState } from "react"

export default function Skills(){
    const [active,setActive] = useState(0)
    return (
        <div className="skills">
            <div className="w-full py-5 flex justify-center items-center">
                <h3 className="underline underline-offset-4 underline-green-500 text-2xl md:text-3xl font-extrabold py-2">SKILLS</h3>
             </div>
             <div className="space-x-2">
                <button className={active==0 ? "px-4 py-1 bg-green-500 border border-green-500 rounded text-center " : "px-4 py-1 border border-green-500 rounded text-center"}>All</button>
                <button className={active==1 ? "px-4 py-1 bg-green-500 border border-green-500 rounded text-center " : "px-4 py-1 border border-green-500 rounded text-center"}>Language</button>
                <button className={active==2 ? "px-4 py-1 bg-green-500 border border-green-500 rounded text-center " : "px-4 py-1 border border-green-500 rounded text-center"}>Frameworks</button>
                <button className={active==4 ? "px-4 py-1 bg-green-500 border border-green-500 rounded text-center " : "px-4 py-1 border border-green-500 rounded text-center"}>Database</button>
             </div>
        </div>
    )
}