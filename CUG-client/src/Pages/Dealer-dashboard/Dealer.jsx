import React from 'react'
import { Outlet } from 'react-router-dom'

const Dealer = () => {
  return (
    <div>
    {/* dealer navbar */} 
    <nav className='w-full text-center bg-custom-gradient'>
      <h1 className="text-4xl font-semibold py-5  text-white">DEALER PORTAL</h1>
    </nav>
    {/* Side bar for dealer */}
    <div className="bg-white-500 flex flex-col md:flex-row h-screen">
      <div className="bg-gray-800 w-1/4 md:w-1/8 h-full p-4 text-white">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
          Activate / De-Activate CUG
        </button>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
          Add New CUG
        </button>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
          Allocation-Wise Report
        </button>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
          Plan-Wise Billing Report
        </button>
      </div>
      <div className="bg-white w-2/3 md:w-3/4 p-8 text-gray-800">
        {/* Content for the Dealer Portal */}
      </div>
      <Outlet/>
    </div>
    </div>
  );
}
export default Dealer;
