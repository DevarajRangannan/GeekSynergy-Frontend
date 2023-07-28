import React from 'react'
import { Link } from 'react-router-dom'

export default function Company_Info() {
  return (
    <>
        <div className='mt-10 flex flex-col justify-center items-center'>
            <h1 className='text-xl text-green-800 md:text-3xl font-bold '>Geeksynergy Technologies Pvt Ltd</h1>
            <p className='mt-5'>Sanjayanagar, Bengaluru-56</p>
            <p className='mt-3'>XXXXXXXXX09</p>
            <p className='mt-3'>XXXXXX@gmail.com</p>
            
            <div className='bg-emerald-800	py-3 px-10 rounded mt-5 text-white'>
                <Link to="/" >Goto Home</Link>
            </div>
        </div>
    </>
  )
}
