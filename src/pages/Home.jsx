import React from 'react'
import NavBar from '../componets/NavBar'

const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))

export default function Home() {


    if((LOGIN_STATUS === null) || (LOGIN_STATUS.login_status !== true)){
        window.location.href = "/login"
        return
    }


    return (
        
        <>
            <NavBar/>
            <div className='md:mt-16 h-96 bg-red-500'>Home</div>
            
        </>
    )
}
