import React from 'react'

const LOGIN_STATUS = localStorage.getItem("login");


export default function Home() {
    
    if(LOGIN_STATUS !== "true"){
        window.location.href = "/login"
        return
    }

    return (
        <div>Home</div>
    )
}
