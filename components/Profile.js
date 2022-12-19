import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import admin from "../public/images/admin.png";
import {BsGithub,BsFacebook,BsLinkedin} from "react-icons/bs"

export default function Profile(){
    return(
        <div className="profile">
            <div className="profile_image">
                <Image src={admin} alt="" width={50} height={50}/>
            </div>
            <div className="profile_info">
                <h3 className="name">Md Robiul Awal</h3>
                <p className="title">Fullstack Web Developer</p>
                <p className="area">
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                        'Experience Frontend React JS',
                        1000,
                        'Experience Frontend Next JS',
                        1000,
                        'Experience Fullstack Next JS',
                        1000,
                        'Experience Backend Express JS',
                        1000,
                        'Experience Backend Node JS',
                        1000,
                        'Experience Database MongoDB',
                        1000,
                        'Experience Database Firebase',
                        1000,
                        'Experience Database mySQL',
                        1000,
                        'Experience Design SASS',
                        1000,
                        'Experience Design Tailwind CSS',
                        1000,
                        'Experience Design Bootstrap',
                        1000,
                        ]}
                        speed={50}
                        wrapper="span" 
                        repeat={Infinity} 
                    />
                </p>
                <p className="contact">
                    <a href=""><BsGithub size={20}/></a>
                    <a href=""><BsFacebook size={20}/></a>
                    <a href=""><BsLinkedin size={20}/></a>
                </p>
            </div>
        </div>
    )
}