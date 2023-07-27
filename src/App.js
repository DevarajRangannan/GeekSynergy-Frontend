import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
export default function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='*' Component={Home}/>
    </Routes>
  )
}
