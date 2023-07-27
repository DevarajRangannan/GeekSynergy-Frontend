import React from 'react'
import { CONTAINER, LOGO_CONTAINER } from './style/NavBar'
import {ReactComponent as MenuIcon} from "../asserts/menu.svg"
import {ReactComponent as CloseIcon} from "../asserts/close.svg"

const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))

export default function NavBar() {

    const toggleNav = ()=>{
        const close_icon = document.getElementById("close_icon")

        const a = close_icon.classList.contains("-translate-x-0")

        if(a){
            close_icon.classList.remove("-translate-x-0")
            close_icon.classList.add("-translate-x-full")
        }
        else{
            close_icon.classList.add("-translate-x-0")
            close_icon.classList.remove("-translate-x-full")
        }
    }

    if((LOGIN_STATUS === null) || (LOGIN_STATUS.login_status !== true)){
        window.location.href = "/login"
        return
    }

    const logout = ()=>{
        LOGIN_STATUS.login_status = false;
        LOGIN_STATUS.username = "";

        localStorage.setItem("Login_Status", JSON.stringify(LOGIN_STATUS))
        window.location.href = "/login"
    }

  return (
    <>
        <div className=' md:hidden fixed   m-2 p-3 border-2 border-black rounded-xl' onClick={toggleNav}>
            <MenuIcon/>
        </div>
        <div className={CONTAINER} id='close_icon'>
            <div className='h-full md:hidden flex'>
                <div className='relative w-[80%] h-full bg-emerald-900 overflow-hidden'>
                    <a className='w-[90%] m-auto mt-5 p-3 rounded flex items-center justify-center bg-white overflow-hidden' href="https://www.geeksynergy.com/" >
                        <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="" width={48}/>
                        <span >GeekSynergy</span>
                    </a>

                    <div className='text-center text-white p-3 m-10 bg-green-800 rounded overflow-hidden'>Company Info</div>

                    <div className='absolute w-full p-3 bottom-0 border-t-2 text-white rounded-xl flex flex-col justify-center items-center'>
                        <h3 className='p-3 text-lg'>{JSON.parse(localStorage.getItem("Login_Status")).username}</h3>
                        <button className='py-3 px-10 bg-red-500 rounded' onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className='w-[20%] h-full bg-gray-500/30' onClick={toggleNav}>
                    <div className=' md:hidden fixed   m-2 p-3 border-2 border-black rounded-xl'>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
            <a href='https://www.geeksynergy.com/' className={LOGO_CONTAINER}>
                <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="" width={48}/>
                <span>GeekSynergy</span>
            </a>
            <div>
                <a href="/" className='m-3'>Company Info</a>
                <button className='py-3 px-10 bg-red-500 rounded text-white hover:bg-red-700' onClick={logout}>Logout</button>
            </div>
            
        </div>
    </>
  )
}
