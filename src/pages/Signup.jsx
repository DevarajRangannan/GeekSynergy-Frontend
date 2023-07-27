import React from 'react'
import { Link } from 'react-router-dom'

import { CONTAINER, BODY_CONTAINER, LOGIN_CONTAINER, WELCOME_TEXT, SUB_TEXT, FORM } from './style/Signup'

const LOGIN_STATUS = localStorage.getItem("login");


export default function Signup() {
  if(LOGIN_STATUS === "true"){
    window.location.href = "/"
    return
  }

  let saveCredentials = (e)=>{

    e.preventDefault()

    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value
    const profession = document.getElementById("Profession").value

    
    localStorage.setItem("login", true)
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("profession", profession)

    window.location.href = "/"

  }

  return (
    <main className={`${CONTAINER}`}>
            <div className={`${BODY_CONTAINER}`}>
                <div>
                    <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="logo" />
                </div>
                <h1 className={`${WELCOME_TEXT}`}>Welcome To GeekSynergy</h1>
                <p className={SUB_TEXT}>Every problem has a various solutionS</p>
            </div>

            <div className={`${LOGIN_CONTAINER}`}>
                <div className={`w-[90%] md:w-3/5 p-3 text-white text-xl font-semibold bg-[#024d14] rounded-t-lg text-center`}>Signup Form</div>

                <form onSubmit={saveCredentials} className={`${FORM}`}>
                  <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} id='name' type="text" placeholder='Enter Your Name...' required autoComplete='on'/>

                  <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} id='password' type="password" placeholder='Enter password...' required autoComplete='on'/>

                  <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} id='email' type="email" placeholder='Enter email...' required autoComplete='on'/>

                  <input className={`w-full mb-6 p-3 rounded outline outline-2 outline-[#024d14] `} id='mobile' type="text"  inputMode="numeric" placeholder='Enter mobile number...' required autoComplete='on'/>

                  <select id="Profession" className={`mb-5 p-3 border-2 border-[#024d14] rounded bg-white focus:border-[#024d14]`} required>
                    <option value="">Choose professtion</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="developer">Developer</option>
                    <option value="tester">Tester</option>                    
                  </select>

                  <button className={`m-auto w-4/5 p-3 lg:p-1 bg-[#076e14] rounded text-xl text-white font-semibold hover:bg-[#034d0c]`} type='submit'>Create Account</button>

                  <div className={`mt-5 text-center`} >
                    <Link to="/login" className={`underline hover:text-blue-900`}>Already have an account</Link>
                  </div>

                </form>
            </div>
        </main>
  )
}
