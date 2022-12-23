import {AiFillStar,AiOutlineFork,AiOutlineArrowUp} from "react-icons/ai"

export default function Footer(){
    return(
        <div className="footer">
            <div>
                <div>
                    <p>ধন্যবাদ</p>
                    <div style={{width : "100%"}}></div>
                </div>
                <div>
                    <p>THANKS</p>
                    <div style={{width : "70%"}}></div>
                </div>
                <div>
                    <p>धन्यवाद</p>
                    <div style={{width : "40%"}}></div>
                </div>
            </div>
            <div>
                <a href="https://github.com/DevWithEasy/portfolio-devwitheasy" target="_blank" rel="noreferrer">
                    <AiFillStar/>
                    <span>STAR</span>
                    <AiOutlineFork/>
                    <span>FORK</span>
                </a>
                <a href="#" className="icon">
                        <AiOutlineArrowUp size={20}/>
                </a>
            </div>
        </div>
    )
}