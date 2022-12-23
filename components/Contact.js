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
        <div id="#contact" className="">
            <div className="flex justify-center items-center">
                <div className="w-8/12 md:w-1/2 flex justify-between items-center py-5">
                    <hr className="w-1/4"/>
                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">CONTACT</div>
                    <hr className="w-1/4"/>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:space-x-3 space-x-0 py-5">
                <div className="md:w-1/2">
                    <div className="md:hidden flex justify-center items-center py-5">
                        <div className="w-2/12 md:w-1/2 flex justify-between items-center">
                            <hr className="w-1/4"/>
                            <div className="w-2/4 bg-slate-700 rounded py-1 text-center">OR</div>
                            <hr className="w-1/4"/>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="w-full space-y-2">
                        <div className="space-y-1">
                            <label htmlFor="">Name :</label>
                            <input type="" name="user_name" className="w-full p-2 bg-gray-600 focus:outline-none focus:ring-2 ring-green-500 rounded"/>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="">Email :</label>
                            <input type="" name="user_email" className="w-full p-2 bg-gray-600 focus:outline-none focus:ring-2 ring-green-500 rounded"/>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="">Subject : </label>
                            <input type="" name="subject" className="w-full p-2 bg-gray-600 focus:outline-none focus:ring-2 ring-green-500 rounded"/>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="">Message :</label>
                            <textarea type="" name="message" rows="5" className="w-full p-2 bg-gray-600 focus:outline-none focus:ring-2 ring-green-500 rounded"/>
                        </div>
                        <button type="submit" className="p-3 bg-green-500 rounded">Send Meesage</button>
                    </form>
                </div>
                <div className="md:w-1/2 space-y-2">
                    <p className="text-lg text-justify">{"I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me."}</p>
                    <p className="py-5">
                        <a href="" className="text-center p-3 rounded bg-green-500 border border-green-500">Contact Me</a>
                    </p>
                    <div>
                        <h3 className="text-2xl">Email : </h3>
                        <p>devwitheasy@gmail.com <span className="text-gray-500">(Recomonded)</span></p>
                    </div>
                    {/* <div>
                        <h3 className="text-2xl">Social : </h3>
                        <p>devwitheasy@gmail.com <span className="text-gray-500">(Recomonded)</span></p>
                    </div> */}
                    <div>
                        <h3 className="text-2xl">Address : </h3>
                        <p>Bangrol, Motra Hat (5100), Thakurgaon Sadar Thakurgaon</p>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}