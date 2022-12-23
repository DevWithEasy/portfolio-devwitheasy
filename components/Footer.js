import {AiFillStar,AiOutlineFork,AiOutlineArrowUp} from "react-icons/ai"

export default function Footer(){
    return(
        <div className="bg-slate-800 text-white py-7 px-5 md:px-10 md:flex md:justify-between space-y-3 md:space-y-0">
            <div className="flex justify-center space-x-2">
                <div className="bg-slate-900  text-xl font-bold rounded">
                    <p className="px-4">ধন্যবাদ</p>
                    <div className="h-1 bg-green-500 rounded" style={{width : "100%"}}></div>
                </div>
                <div className="bg-slate-900 text-xl font-bold rounded">
                    <p className="px-4">THANKS</p>
                    <div className="h-1 bg-green-500 rounded" style={{width : "70%"}}></div>
                </div>
                <div className="bg-slate-900 text-xl font-bold rounded">
                    <p className="px-4">धन्यवाद</p>
                    <div className="h-1 bg-green-500 rounded" style={{width : "40%"}}></div>
                </div>
            </div>
            <div className="flex justify-center space-x-3">
                <a href="https://github.com/DevWithEasy/portfolio-devwitheasy" target="_blank" rel="noreferrer" className="flex items-center space-x-1">
                    <AiFillStar/>
                    <span>STAR</span>
                    <AiOutlineFork/>
                    <span>FORK</span>
                </a>
                <a href="#" className="flex justify-between items-center px-1 bg-green-500 rounded">
                        <AiOutlineArrowUp size={20}/>
                </a>
            </div>
        </div>
    )
}