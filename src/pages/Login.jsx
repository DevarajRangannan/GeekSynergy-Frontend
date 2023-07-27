import React from 'react'
import { Link } from 'react-router-dom'

import { CONTAINER, BODY_CONTAINER, LOGIN_CONTAINER, WELCOME_TEXT, SUB_TEXT, FORM } from './style/Login'

export default function Login() {
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
                <div className={`w-[90%] md:w-3/5 p-3 text-white text-xl font-semibold bg-[#024d14] rounded-t-lg text-center`}>Login Form</div>

                <form className={`${FORM}`}>
                    <div className={`w-full relative mb-2`}>
                        <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} type="text" placeholder='Enter Your Name...' required/>
                        <p className={`bottom-0 right-0 text-right italic text-sm text-red-700 absolute hidden`}>*invalide username</p>
                    </div>

                    <div className={`w-full relative`}>
                        <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} type="password" placeholder='Enter password...' required/>
                        <p className={`bottom-0 right-0 text-right italic text-sm text-red-700 absolute hidden`}>*invalide password</p>
                    </div>

                    <span className={`mb-3 pr-1 text-right italic `}>forget password?</span>

                    <button className={`m-auto w-4/5 p-3 lg:p-1 bg-[#076e14] rounded text-xl text-white font-semibold hover:bg-[#034d0c]`}>Login</button>

                    <Link to="/signup" className={`mt-5 text-center underline hover:text-blue-900`}>Click to create account</Link>

                </form>
            </div>
        </main>
    </>
  )
}
