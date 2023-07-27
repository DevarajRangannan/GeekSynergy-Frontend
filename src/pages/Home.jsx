import React from 'react'

const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))

export default function Home() {


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
            <div>Home</div>
            <button onClick={logout}>Logout</button>
        </>
    )
}
