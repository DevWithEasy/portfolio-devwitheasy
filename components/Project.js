import Image from "next/image";
import { useState } from "react";
import {AiFillGithub,AiOutlineInfoCircle} from "react-icons/ai"
import {BiLinkExternal} from "react-icons/bi"

export default function Project({project}){
    const [details,setDetails] = useState(false)
    return(
        <div className="relative bg-slate-800 text-gray-300 rounded ">
                    <Image src={project.image} alt={project.name} style={{borderRadius : "5px"}} className="h-60 md:h-52"/>
                    <div className="p-4 space-y-6">
                        <div>
                            <a className="text-2xl font-bold">{project.name}</a>
                            <p>{project.details}</p>
                        </div>
                        <div className="flex space-x-3">
                            <a href={project.live_link} className="hover:text-green-500 transtion-all duration-500"><AiFillGithub size={25}/></a>
                            <a href={project.github_link} className="hover:text-green-500 transtion-all duration-500"><BiLinkExternal size={25}/></a>
                            <button onClick={()=>setDetails(!details)} className="hover:text-green-500 transtion-all duration-500 cursor-pointer"><AiOutlineInfoCircle size={25}/></button>
                        </div>
                    </div>
                    {/*========= Deaitls information about project ============*/}
                    {details && <div className="absolute w-full h-full p-2 space-y-2 left-0 top-0 bg-slate-800 rounded overflow-x-auto">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-extrabold">Details</h3>
                        <button onClick={()=>setDetails(!details)} className="w-6 h-6 flex justify-center items-center rounded-full hover:text-white bg-green-500 hover:bg-red-500 hover:border-none transition-all duration-500">X</button>
                    </div>
                    <hr className="my-2"/>
                    <h3 className="font-bold underline underline-offset-4">Features:</h3>
                    <div className="space-y-2">
                        {project.features.map((f,i)=><p key={i} className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 font-bold text-green-400 shrink-0">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                            <span className="-mt-1.5">{f}</span>
                        </p>)}
                    </div>
                    <h3 className="font-bold underline underline-offset-4">Elements:</h3>
                    <div className="space-y-2">
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>

                            <span className="-mt-1.5">Language - {project.elements.language}</span>
                        </p>
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>

                            <span className="-mt-1.5">Library Framwwork- {project.elements.library}</span>
                        </p>
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>

                            <span className="-mt-1.5">Style - {project.elements.style}</span>
                        </p>
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>

                            <span className="-mt-1.5">Backend Database - {project.elements.backend_database}</span>
                        </p>
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                            </svg>

                            <span className="-mt-1.5">Authentication - {project.elements.authentication}</span>
                        </p>
                        <p className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-green-400 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                            </svg>

                            <span className="-mt-1.5">Hosting - {project.elements.hosting}</span>
                        </p>
                    </div>
                    </div>}
                    
                </div>
    )
}