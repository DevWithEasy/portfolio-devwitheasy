import { AiFillGithub, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Heading from "./helper/Heading";

export default function Hero(){
    return (
        <div id="home" className="hero">
                <div>
                    <div className="about">
                        <div className="name">
                            <p>Hello ! I am</p>
                            <h1>Md. Robiul Awal</h1>
                        </div>
                        <div className="skill">
                            <p className="title">Fullstack Web Developer</p>
                            <p className="">
                                <TypeAnimation
                                    // Same String at the start will only be typed once, initially
                                    sequence={[
                                    'React JS',
                                    1000,
                                    'Next JS',
                                    1000,
                                    'Node JS',
                                    1000,
                                    'Express JS',
                                    1000,
                                    'MongoDB',
                                    1000,
                                    'Firebase',
                                    1000,
                                    1000,
                                    'SASS',
                                    1000,
                                    'Tailwind CSS',
                                    1000,
                                    'Bootstrap',
                                    1000,
                                    ]}
                                    speed={50}
                                    wrapper="span" 
                                    repeat={Infinity} 
                                />
                            </p>
                        </div>
                        <div className="about_resume">
                            <a href="" className="resume">Get Resume</a>
                            <a href="#about" className="about">About me</a>
                        </div>
                    </div>
                    <div className="follow">
                            <div className="follow_heading">
                                <div>
                                    <hr/>
                                    <div>FOLLOW ME</div>
                                    <hr/>
                                </div>
                            </div>
                            <div className="follow_option">
                                <div>
                                    <a href="https://github.com/DevWithEasy" target="_blank" rel="noreferrer"><AiFillGithub size={20}/></a>
                                    <a href="https://linkedin.com/in/robiulawal68" target="_blank" rel="noreferrer"><FaLinkedinIn size={20}/></a>
                                    <a href="https://facebook.com/robiulawal688" target="_blank" rel="noreferrer"><FaFacebookF size={20}/></a>
                                    <a href="https://twitter.com/robiulawal68" target="_blank" rel="noreferrer"><AiOutlineTwitter size={20}/></a>
                                    <a href="https://www.youtube.com/@devwitheasy" target="_blank" rel="noreferrer"><AiOutlineYoutube size={20}/></a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}