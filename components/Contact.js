import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Heading from './helper/Heading';

export default function Contact(){
    const form = useRef()
    function sendEmail (e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vahxsal', 'template_q4rd18i', form.current, 'vrYNit74nKosXSf1I')
          .then((result) => {
              toast.success("Email sent successfully")
              e.target.reset()
          }, (error) => {
            toast.error("Email sent Failed")
          });
      };
    return(
        <div id="contact" className="contact">

            <Heading text="contact"/>

            <div className="contact_area">
                <div className="contact_area_email">
                    <div>
                        <div>
                            <hr/>
                            <div>OR</div>
                            <hr/>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="">
                        <div>
                            <label htmlFor="">Name :</label>
                            <input type="" name="user_name"/>
                        </div>
                        <div>
                            <label htmlFor="">Email :</label>
                            <input type="" name="user_email"/>
                        </div>
                        <div>
                            <label htmlFor="">Subject : </label>
                            <input type="" name="subject"/>
                        </div>
                        <div>
                            <label htmlFor="">Message :</label>
                            <textarea type="" name="message" rows="5"/>
                        </div>
                        <button type="submit" className="p-3 bg-green-500 rounded">Send Meesage</button>
                    </form>
                </div>
                <div className="contact_area_social">
                    <p className="bio">{"I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me."}</p>
                    <p className="contact">
                        <a href="">Contact Me</a>
                    </p>
                    <div>
                        <h3 >Email : </h3>
                        <p>devwitheasy@gmail.com <span>(Recomonded)</span></p>
                    </div>
                    <div>
                        <h3>Address : </h3>
                        <p>Bangrol, Motra Hat (5100), Thakurgaon Sadar Thakurgaon</p>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}