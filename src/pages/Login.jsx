import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import { CONTAINER, BODY_CONTAINER, LOGIN_CONTAINER, WELCOME_TEXT, SUB_TEXT, FORM, LOGIN_TILE, INPUT_BOX, ERROR_MSG, SUBMIT_BTN, ALTER_LINK } from './style/Login'

const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))

let name_error = ""
let password_error =  ""

export default function Login() {

    useEffect(()=>{
        name_error =  document.getElementById("name_error")
        password_error =  document.getElementById("password_error")
    },[])

    if(LOGIN_STATUS?.login_status === true){
        window.location.href = "/"
        return 
    }

    const userValidation = (e)=>{
        e.preventDefault();

        const input_name = document.getElementById("name").value
        const input_password = document.getElementById("password").value

        const USSER_CREDENTIAL = JSON.parse(localStorage.getItem(input_name))


        if(USSER_CREDENTIAL?.username === input_name){
            if(USSER_CREDENTIAL?.password === input_password){
                LOGIN_STATUS.login_status = true;
                LOGIN_STATUS.username = input_name;

                localStorage.setItem("Login_Status", JSON.stringify(LOGIN_STATUS))
                window.location.href = "/"
            }
            else{
                password_error.classList.remove("hidden")
            }
        }
        else{
            name_error.classList.remove("hidden")
        }

    }

    const nameErrorHidden = ()=>{
        name_error.classList.add("hidden")
    }

    const passwordErrorHidden = ()=>{
        password_error.classList.add("hidden")
    }

    

    return (
        <>
            <main className={`${CONTAINER}`}>
                <div className={`${BODY_CONTAINER}`}>
                    <div>
                        <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="logo" />
                    </div>
                    <h1 className={`${WELCOME_TEXT}`}>Welcome To GeekSynergy</h1>
                    <p className={SUB_TEXT}>Every problem has a various solutionS</p>
                </div>

                <div className={`${LOGIN_CONTAINER}`}>
                    <div className={LOGIN_TILE}>Login Form</div>

                    <form onSubmit={userValidation} className={`${FORM}`}>
                        <div className={`w-full relative mb-2`}>
                            <input className={INPUT_BOX} id='name' type="text" placeholder='Enter username...' autoComplete='on' onChange={nameErrorHidden} required />

                            <p className={ERROR_MSG}id='name_error'>*invalide username</p>
                        </div>

                        <div className={`w-full relative`}>
                            <input className={INPUT_BOX} id="password" type="password" placeholder='Enter password...' onChange={passwordErrorHidden} required/>
                            <p className={ERROR_MSG}id='password_error' >*invalide password</p>
                        </div>

                        <span className={`mb-3 pr-1 text-right italic `}>forget password?</span>

                        <button className={SUBMIT_BTN} type='submit'>Login</button>

                        <Link to="/signup" className={ALTER_LINK}>Click to create account</Link>

                    </form>
                </div>
            </main>
        </>
    )
}
