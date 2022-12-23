import { AiFillGithub, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero(){
    return (
        <div id="home" className="h-screen flex justify-center items-center">
                <div className="w-full text-center space-y-3 pb-40 md:pb-0">
                    <div className="w-full text-center space-y-3">
                        <div className="space-y-1">
                            <p className="text-green-500 text-xl">Hello ! I am</p>
                            <h1 className="text-4xl md:text-6xl font-bold">Md. Robiul Awal</h1>
                        </div>
                        <div className="py-2">
                            <p className="text-green-500 text-xl font-bold">Fullstack Web Developer</p>
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
                        <div className="py-2 pb-6 md:pb-10 space-x-2 md:text-base">
                            <a href="" className="text-center p-3 rounded border-2 border-green-500 bg-green-500">Get Resume</a>
                            <a href="#about" className="text-center p-3 rounded border-2 border-green-500 hover:bg-green-500 transtion-all duration-500">About me</a>
                        </div>
                    </div>
                    <div className="">
                            <div className="flex justify-center items-center">
                                <div className="w-8/12 md:w-1/2 flex justify-between items-center">
                                    <hr className="w-1/4"/>
                                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">FOLLOW ME</div>
                                    <hr className="w-1/4"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-center py-5">
                                <div className="flex items-center space-x-3">
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