import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact(){
    const form = useRef()

    function sendEmail (e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vahxsal', 'template_0ec0wf8', form.current, 'vrYNit74nKosXSf1I')
          .then((result) => {
              toast.success("Email sent successfully")
          }, (error) => {
            toast.error("Email sent Failed")
          });
        e.target.reset()
      };
    return(
        <div className="contact">
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="">Name : </label>
                    <br/>
                    <input type="text" name="user_name" placeholder="Your full name" required / >
                </div>
                <div>
                    <label htmlFor="">Email : </label>
                    <br/>
                    <input type="email" name="user_email" placeholder="Your valid email address"/>
                </div>
                <div>
                    <label htmlFor="">Subject : </label>
                    <br/>
                    <input type="text" name="subject" placeholder="Subject"/>
                </div>
                <div>
                    <label htmlFor="">Your Message : </label>
                    <br/>
                    <textarea type="" name="message" rows="6" placeholder="write your message here"/>
                </div>
                <button type="submit">Send Mail</button>
            </form>
            <Toaster />
        </div>
    )
}