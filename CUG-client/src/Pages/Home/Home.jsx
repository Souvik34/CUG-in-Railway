/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  
  return (
    <>
      <div className='items-center text-center justify-center h-full'>
        <h1 className='text-5xl text-[#048DC8]  font-noto font-bold m-10'>CLOSED USER GROUP</h1>
        <div className='items-center text-center justify-center md:mt-10 p-6 flex flex-wrap gap-[30vh]'>
          {/* admin card */}
          <div className='justify-center text-center items-center bg-[#F4F4F4] px-[70px] py-[30px] rounded-[15px_5px_15px_5px] shadow-xl border-t-[10px] border-purple-500'>
            <img src="../../../public/images/Admin_logo.png" alt="Admin" />
           <Link to="/adminLogin"><button className='bg-[#4E9DF2] hover:bg-blue-600 mt-5 px-6 py-3 rounded-md text-white text-xl font-semibold'>ADMIN LOGIN</button></Link> 
          </div>

          {/* dealer card */}
          <div className='justify-center text-center items-center bg-[#F4F4F4] px-[70px] py-[30px] rounded-[15px_5px_15px_5px] shadow-xl border-t-[10px] border-blue-400'>
          <img src="../../../public/images/Dealer_logo.png" alt="Dealer" />
           <Link to="/dealerLogin"><button className='bg-[#4E9DF2] hover:bg-blue-600  mt-5 px-6 py-3 rounded-md text-white text-xl font-semibold'>DEALER LOGIN</button></Link> 
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
