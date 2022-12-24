import {BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs"
import {} from "react-icons/"
import {} from "react-icons/"

export default function Footer(){
    return(
        <div className="footer">
            <div className="">
                <div className="social">
                    <BsFacebook size={25} className="social-icon"/>
                    <BsLinkedin size={25} className="social-icon"/>
                    <BsGithub size={25} className="social-icon"/>
                </div>
                <div className="link">
                    <a href="#skill">
                        <span>Skills</span>
                    </a>
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <a href="#project">
                        <span>All Works</span>
                    </a>
                </div>
                <div className="link">
                    <a href="#skill">
                        <span>Terms of use</span>
                    </a>
                    <div></div>
                    <a href="#project">
                        <span>Privacy policy</span>
                    </a>
                </div>
                <div className="copyright">
                    <p>@2022 DevWithEasy</p>
                </div>
            </div>
        </div>
    )
}