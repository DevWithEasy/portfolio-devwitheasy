import Image from "next/image";
import image from "../public/images/admin.png"
import {BiMenu,BiMenuAltLeft} from "react-icons/bi"
import { useState } from "react";
export default function Header(){
    const [show,setShow] = useState(false)
    return (
        <div className="header">
            <div>
                <a href="#">
                    <Image src={image} height="30" width="30" alt="dev"/>
                </a>
                <div className={!show ? "option_area option_area_hide" : "option_area option_area_unhide"}>
                    <a href="#about"  className={!show ? "option" : "option option_unhide"}>ABOUT</a>
                    <a href="#skill"  className={!show ? "option" : "option option_unhide"}>SKILLS</a>
                    <a href="#project"  className={!show ? "option" : "option option_unhide"}>PORTFOLIO</a>
                    <a href="#contact"  className={!show ? "option" : "option option_unhide"}>CONTACT</a>
                    <a href="#"  className={!show ? "resume_hide" : "option option_unhide resume_unhide"}>RESUME</a>
                </div>
                <button onClick={()=>setShow(!show)}>
                    {show ? <BiMenuAltLeft size={25}  /> : <BiMenu size={25}  />}
                </button>
            </div>
        </div>
    )
}