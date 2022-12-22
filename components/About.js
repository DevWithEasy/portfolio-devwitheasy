import Image from "next/image";
import developer from "../public/images/developer.jpg";

export default function About(){
    return (
        <div id="about" className="space-y-5">
            <div className="flex justify-center items-center">
                <div className="w-8/12 md:w-1/2 flex justify-between items-center">
                    <hr className="w-1/4"/>
                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">FOLLOW ME</div>
                    <hr className="w-1/4"/>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-x-2">
                <div className="md:w-1/2 md:pl-4 pt-4 md:pt-0">
                    <p className="text-justify md:text-lg first-letter:text-4xl first-letter:text-green-500 first-letter:font-extrabold">
                    {"Hello! I'm Robiul Awal, a passionate Web Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests."}
                    </p>
                    <div className="py-10 space-x-2 md:text-base">
                        <a href="" className="text-center px-2 md:p-3 py-1.5 rounded bg-green-500">Get Resume</a>
                        <a href="" className="text-center px-2 md:p-3 py-1.5 rounded border border-green-500">My Skills</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center shrink-0">
                    <Image src={developer} alt="Developer" height={300} style={{borderRadius : "5px"}}/>
                </div>
            </div>

        </div>
    )
}