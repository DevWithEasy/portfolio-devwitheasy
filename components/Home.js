import { AiFillGithub, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Header from "./Header";

export default function Hero(){
    return (
        <div className="relative h-screen flex justify-between items-center">
            <Header/>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="text-center space-y-3">
                    <div>
                        <p className="text-green-500 md:text-xl">Hello ! I am</p>
                        <h1 className="text-3xl md:text-6xl font-bold">MD. Robiul Awal</h1>
                    </div>
                    <div className="py-2">
                        <p className="text-green-500 md:text-xl font-bold">FullStack Web Developer</p>
                        <p className="text-sm">
                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                'React JS',
                                1000,
                                'Next JS',
                                1000,
                                'Next JS',
                                1000,
                                'Express JS',
                                1000,
                                'Node JS',
                                1000,
                                'MongoDB',
                                1000,
                                'Firebase',
                                1000,
                                'mySQL',
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
                    <div className="pb-5 md:pb-10 space-x-2 md:text-base">
                        <a href="" className="text-center px-2 md:p-3 py-1.5 rounded bg-green-500">Get Resume</a>
                        <a href="" className="text-center px-2 md:p-3 py-1.5 rounded border border-green-500">About me</a>
                    </div>
                    <div className="h-0.5 bg-gray-100 relative">
                            <div className="absolute bg-slate-600 px-2 md:py-1 translate-x-2/3 md:translate-x-1/3 -top-3 md:-top-4 rounded" >FOLLOW ME</div>
                            <div className="flex items-center justify-center py-7">
                                <div className="flex items-center  space-x-3">
                                    <AiFillGithub size={25}/>
                                    <FaLinkedinIn size={25}/>
                                    <FaFacebookF size={25}/>
                                    <AiOutlineTwitter size={25}/>
                                    <AiOutlineYoutube size={25}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}