import Image from "next/image";
import developer from "../public/images/developer.jpg";
import Heading from "./helper/Heading";

export default function About(){
    return (
        <div id="about">

            <Heading text="about"/>

            <div className="about_details">
                <div className="about_details_info">
                    <p>
                    {"Hello! I'm Robiul Awal, a passionate Web Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests."}
                    </p>
                    <div>
                        <a href="" className="resume">Get Resume</a>
                        <a href="#skill" className="skill">My Skills</a>
                    </div>
                </div>
                <div className="about_details_image">
                    <Image src={developer} alt="Developer" height={300} style={{borderRadius : "5px"}} className="image"/>
                </div>
            </div>

        </div>
    )
}