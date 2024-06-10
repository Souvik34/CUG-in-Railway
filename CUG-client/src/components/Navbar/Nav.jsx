/* eslint-disable no-unused-vars */
import React from 'react'
import "./Nav.css"



const Nav = () => {
  return (

    <nav className='navbar drop-shadow-lg' >
      <div className="flex flex-col items-center">
        <h1 className='text-4xl  font-bold tracking-tight text-[#3271B8] drop-shadow-lg flex items-center'>
          <img src="../../../public/images/logo.png" alt="Logo" className="h-20 w-20 mr-2" />
          East Coast Railway, Bhubaneswar
        </h1>
        <div className="text-[20px] text-[#E98B2F]  italic drop-shadow-lg">Progress our Mission and Fulfillment our Vision</div>
      </div>
    </nav>
  )
}

export default Nav