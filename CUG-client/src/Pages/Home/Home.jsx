/* eslint-disable no-unused-vars */
import React from 'react'


const Home = () => {
  
  return (
    <>
      <div className='items-center text-center justify-center h-full'>
        <h1 className='text-5xl text-[#048DC8] font-semibold m-10'>CLOSED USER GROUP</h1>
        <div className='items-center text-center justify-center md:mt-10 p-6  md:flex md:space-x-[20%] space-y-8 '>
          {/* admin card */}
          <div className='justify-center text-center items-center bg-[#F4F4F4] px-[70px] py-[30px] rounded-[15px_50px_30px] shadow-lg'>
            <img src="../../../public/images/Admin_logo.png" alt="Admin" />
            <button className='bg-[#4E9DF2] hover:bg-blue-600 mt-5 px-6 py-3 rounded-md text-white text-xl font-semibold'>ADMIN LOGIN</button>
          </div>

          {/* dealer card */}
          <div className='justify-center text-center items-center bg-[#F4F4F4] px-[70px] py-[30px] rounded-[15px_50px_30px] shadow-lg'>
          <img src="../../../public/images/Dealer_logo.png" alt="Dealer" />
            <button className='bg-[#4E9DF2] hover:bg-blue-600  mt-5 px-6 py-3 rounded-md text-white text-xl font-semibold'>DEALER LOGIN</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
