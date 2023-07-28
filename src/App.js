import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Company_Info from './pages/Company_Info'
export default function App() {
  return (
    <>
      <div className={`min-w-[20em]	md:max-w-screen-2xl md:m-auto`}>

        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/company-info' Component={Company_Info}/>
          <Route path='*' Component={Home}/>
        </Routes>

      </div>
    </>
  )
}
