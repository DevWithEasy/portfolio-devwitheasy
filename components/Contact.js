import emailjs from '@emailjs/browser';

export default function Contact(){
    function sendMail(){
        emailjs.send()
    }
    return(
        <div className="contact">
            <h3>Contact Me</h3>
            <form>
                <div>
                    <label for="">Your Name : </label>
                    <br/>
                    <input type="" name="name" placeholder=""/>
                </div>
                <div>
                    <label for="">Your Email : </label>
                    <br/>
                    <input type="" name="email" placeholder=""/>
                </div>
                <div>
                    <label for="">Your Message : </label>
                    <br/>
                    <textarea type="" name="message" rows="6" placeholder="write your message here"/>
                </div>
                <button type="submit">Send Mail</button>
            </form>
        </div>
    )
}