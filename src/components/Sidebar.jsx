import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from './Context'
import '../Sidebar.css'
const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const{onSend,prev_prmt,setRecent_prmt,newChat} = useContext(Context)
    const loadPrmt = async(prmt)=>{
        setRecent_prmt(prmt)
        await onSend(prmt)
    }

    const toggledarkmode = ()=>{
        document.body.classList.toggle('dark_mode')
    }

  return (
    <div className='sidebar_full'>
        <div>
            <div className="side_upper">
            <img onClick={()=>setExtended(prev_val=>!prev_val)} className='sidebar' src={assets.sidebar}/>
            {extended?<>
            <div onClick={()=>{newChat()}} className='new_chat'>
                <img src={assets.newchat}/>
            </div>
             <button onClick={toggledarkmode} className='LD'>
                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.994 13.84l-6.241-2.361 1.076-6.586-6.299 2.203-3.409-5.736-3.409 5.736-6.299-2.203 1.076 6.586-6.241 2.361 5.057 4.354-3.263 5.821 6.672 0.084 1.242 6.556 5.166-4.224 5.166 4.224 1.242-6.556 6.672-0.084-3.263-5.821 5.057-4.354zM16.472 25.494c-4.977 0-9.012-4.035-9.012-9.012s4.035-9.012 9.012-9.012c2.328 0 4.45 0.883 6.049 2.332-0.55-0.214-1.132-0.364-1.736-0.425-0.239-0.024-0.486 0-0.731 0-3.929 0-7.099 3.17-7.099 7.099s3.17 7.099 7.099 7.099c0.9 0 1.76-0.179 2.551-0.492-1.609 1.495-3.764 2.41-6.133 2.41z"></path>
                    </svg>
            </button>
            </>        
            :null}
            </div>

            {extended?<div className='side'>
                <hr id='line'/>
                <p className='recent-title'>Recent Prompt</p>
                {prev_prmt.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=> loadPrmt(item)} className="recent-entry">
                            <img src={assets.history_icon}/>
                            <p className="truncate">{item.slice(0,15)}...</p>
                        </div>
                    )
                })}
            </div>:null}
        </div>
        <div className='bottom'>
            <div onClick={()=>{newChat()}} id='NEWChat' className="bottom-item">
                <img src={assets.newchat}/>
                {extended?<p id='NEWChat_p'>New Chat</p>:null}
            </div>
            
            <div className="bottom-item">
                <img src={assets.question_icon} alt=""/>
               {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item">
                <img src={assets.setting_icon} alt=""/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}
export default Sidebar

