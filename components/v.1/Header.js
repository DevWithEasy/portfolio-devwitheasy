import { useState } from 'react';
import {BsSun,BsMoon} from 'react-icons/bs'

export default function Header(){
    const [dark,setDark]= useState(false)
    const addDark=()=>{
        const root = window.document.documentElement;
        root.classList.remove('dark')
        setDark(!dark)
    }
    const removeDark=()=>{
        const root = window.document.documentElement;
        root.classList.add('dark')
        setDark(!dark)
    }
    return(
        <div className="v1_header">
            <div className='mode'>
                {
                    dark?<BsSun onClick={addDark}/>:<BsMoon onClick={removeDark}/>
                }
            </div>
        </div>
    )
}