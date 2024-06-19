import React from 'react'
import { useAuth } from '../../store/Auth'

const AdminWelcome = () => {
    const {user} =useAuth();

  return (
    <div className="h-[550px] bg-gray-100 flex flex-col justify-center items-center p-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-5 max-w-lg w-full text-center justify-center items-center">

        <img src="../../../public/images/Admin_sir.svg" className='size-[50%] inline-flex' alt="" />
        <h1 className="text-4xl font-bold  mb-4">Welcome,<br/> <span className='text-[#9D4EDD]'>{user.username}!</span></h1>

        <p className="text-gray-600 mb-8">
          Here is your dashboard where you can manage all aspects of the system.
        </p>
        
      </div>
    </div>
  )
}

export default AdminWelcome
