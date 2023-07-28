import React,{useEffect} from 'react'
import { CONTAINER, LOGO_CONTAINER } from './style/NavBar'
import {ReactComponent as MenuIcon} from "../asserts/menu.svg"
import {ReactComponent as CloseIcon} from "../asserts/close.svg"

const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))

export default function NavBar() {

    useEffect(() => {

        const scrollableDiv = document.getElementById('nav_sec');
    
        const handleScroll = (event) => {
          event.preventDefault();  
        };
    
        
        scrollableDiv.addEventListener('wheel', handleScroll, { passive: false });
        scrollableDiv.addEventListener('touchmove', handleScroll, { passive: false });
    
        return () => {
          scrollableDiv.removeEventListener('wheel', handleScroll);
          scrollableDiv.addEventListener('touchmove', handleScroll);
        };
      }, []);

    const toggleNav = ()=>{
        const nav_sec = document.getElementById("nav_sec")

        const a = nav_sec.classList.contains("-translate-x-0")

        if(a){
            
            
            nav_sec.classList.remove("-translate-x-0")
            nav_sec.classList.add("-translate-x-full")
        }
        else{
            
            nav_sec.classList.add("-translate-x-0")
            nav_sec.classList.remove("-translate-x-full")
            

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
        <div className=' md:hidden fixed top-0 z-20 bg-white m-2 p-3 border-2 border-black rounded-xl' onClick={toggleNav}>
            <MenuIcon/>
        </div>
        <div className={`${CONTAINER}`} id='nav_sec'>
            <div className='h-full md:hidden flex'>
                <div className='relative w-[80%] h-full bg-emerald-900 overflow-hidden'>
                    <a className='w-[90%] m-auto mt-5 p-3 rounded flex items-center justify-center bg-white overflow-hidden' href="https://www.geeksynergy.com/" >
                        <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="" width={48}/>
                        <span >GeekSynergy</span>
                    </a>

                      <a href="/company-info">
                          <div className='text-center text-white p-3 m-10 bg-green-800 rounded overflow-hidden'>
                              Company Info
                          </div>
                      </a>

                    

                    <div className='absolute w-full mb-16 p-3 bottom-0 border-t-2 text-white rounded-xl flex flex-col justify-center items-center'>
                        <h3 className='p-3 text-lg'>{JSON.parse(localStorage.getItem("Login_Status")).username}</h3>
                        <button className='py-3 px-10 bg-red-500 rounded' onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className='w-[20%] h-full bg-gray-500/30' onClick={toggleNav}>
                    <div className=' md:hidden fixed bg-white  m-2 p-3 border-2 border-black rounded-xl'>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
            <a href='https://www.geeksynergy.com/' className={LOGO_CONTAINER}>
                <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="" width={48}/>
                <span>GeekSynergy</span>
            </a>
            <div>
                <a href="/company-info" className='m-3'>Company Info</a>
                <button className='py-3 px-10 bg-red-500 rounded text-white hover:bg-red-700' onClick={logout}>Logout</button>
            </div>
            
        </div>
    </>
  )
}
