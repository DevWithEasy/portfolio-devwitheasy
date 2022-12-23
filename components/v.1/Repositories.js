import { FcFolder } from 'react-icons/fc';
import repositories from "../../public/data/repositories";

export default function Repositories(){
    return (
        <div className="v1_repositories">
            {repositories.map((repo,i)=><div key={i} className="repo">
                <a href={repo.link} target='_blank' rel="noreferrer">
                    <FcFolder  className="icon"/>
                    <span>{repo.name}</span>
                </a>
                {/* <p className='text-gray-500 text-sm'>{repo.details}</p>
                <p className='flex items-center space-x-1'>
                    <div className='rounded-full bg-yellow-500 w-2 h-2 p-0.5'></div>
                    <span>{repo.language}</span>
                </p>
                <div className='text-justify space-x-1'>
                    {repo.tools.map((item,i)=><span key={i} className="text-xs border p-0.5 bg-green-200">{item}</span>)}
                </div> */}
            </div>)}
        </div>
    )
}