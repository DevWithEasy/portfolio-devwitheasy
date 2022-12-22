export default function Contact(){
    return(
        <div className="">
            <div className="flex justify-center items-center">
                <div className="w-8/12 md:w-1/2 flex justify-between items-center">
                    <hr className="w-1/4"/>
                    <div className="w-2/4 bg-slate-700 rounded py-1 text-center">CONTACT</div>
                    <hr className="w-1/4"/>
                </div>
            </div>
            <div className="">
                <div className="">
                    <form>
                        <div className="">
                            <label htmlFor=""></label>
                            <input type="" name="user_name"/>
                        </div>
                        <div className="">
                            <label htmlFor=""></label>
                            <input type="" name="user_email"/>
                        </div>
                        <div className="">
                            <label htmlFor=""></label>
                            <input type="" name="subject"/>
                        </div>
                        <div className="">
                            <label htmlFor=""></label>
                            <input type="" name="message"/>
                        </div>
                    </form>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}