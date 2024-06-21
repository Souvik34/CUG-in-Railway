import React from 'react'
import { useAuth } from '../../store/Auth'

const DealerWelcome = () => {
    const {user}= useAuth();
    console.log("user",user)
  return (
    <div className="container mx-auto my-4  h-[550px]  flex flex-col justify-center items-center p-6 w-3/4">
      <div className="bg-gray-100 shadow-lg rounded-lg p-5 max-w-lg w-full text-center justify-center items-center">
        <img src="../../../public/images/Dealer.svg" className='size-[50%] inline-flex' alt="" />
        <h1 className="text-4xl font-bold  mb-4">Welcome,<br/> <span className='text-[#4e4edd]'>{user.username}!</span></h1>
        <p className="text-gray-600 mb-8">
          Here is your dashboard where you can manage all aspects of the system.
        </p>
        
      </div>
    </div>
   
  )

}

export default DealerWelcome
