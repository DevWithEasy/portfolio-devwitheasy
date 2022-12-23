import Image from "next/image";
import image from "../public/images/admin.png"
import {BiMenu,BiMenuAltLeft} from "react-icons/bi"
import { useState } from "react";
export default function Header(){
    const [show,setShow] = useState(false)
    return (
        <div className="sticky top-0 w-full flex items-center px-5 md:px-10 py-2 bg-slate-800 text-white z-10">
            <div className="relative w-full flex justify-between items-center">
                <a href="#" className="flex justify-center items-center bg-green-500 w-12 h-12 rounded-full">
                    <Image src={image} height="30" width="30" alt="dev"/>
                </a>
                <div className={!show ? "hidden md:block space-x-3" : "absolute right-0 translate-y-2/3 w-full flex flex-col space-y-2 bg-slate-800 p-2 pb-4 rounded-md"}>
                    <a href="#about"  className={!show ? "px-2 py-1.5 hover:bg-green-500 transition-all duration-500" : "px-2 py-1.5 hover:bg-green-500 transition-all duration-500 w-28 hover:translate-x-2"}>ABOUT</a>
                    <a href="#skill"  className={!show ? "px-2 py-1.5 hover:bg-green-500 transition-all duration-500" : "px-2 py-1.5 hover:bg-green-500 transition-all duration-500 w-28 hover:translate-x-2"}>SKILLS</a>
                    <a href="#project"  className={!show ? "px-2 py-1.5 hover:bg-green-500 transition-all duration-500" : "px-2 py-1.5 hover:bg-green-500 transition-all duration-500 w-28 hover:translate-x-2"}>PORTFOLIO</a>
                    <a href="#contact"  className={!show ? "px-2 py-1.5 hover:bg-green-500 transition-all duration-500" : "px-2 py-1.5 hover:bg-green-500 transition-all duration-500 w-28 hover:translate-x-2"}>CONTACT</a>
                    <a href="#"  className={!show ? "px-2 py-1.5 ml-2 hover:bg-green-500 transition-all duration-500 ring-2 ring-green-500 rounded" : "px-2 py-1.5 hover:bg-green-500 transition-all duration-500 ring-2 ring-green-500 rounded w-28 hover:translate-x-2 text-center ml-2 md:0"}>RESUME</a>
                </div>
                <button onClick={()=>setShow(!show)} className="md:hidden px-1 py-1 bg-green-500 rounded">
                    {show ? <BiMenuAltLeft size={25}  /> : <BiMenu size={25}  />}
                </button>
            </div>
        </div>
    )
}