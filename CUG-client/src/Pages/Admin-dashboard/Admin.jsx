/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className= 'overflow-y-hidden'>
      <nav className="h-full text-center bg-admin-gradient drop-shadow-xl">
        <h1 className="text-4xl font-semibold py-5 text-white">ADMIN PORTAL</h1>
      </nav>
      <div className="bg-gray-100 min-h-screen flex">
        <div className="bg-gray-800 w-64 p-4">
          <div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white text-2xl font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
            CREATE DEALER
            </button>
    
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
            CUG DETAILS
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Add New CUG
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allotment History
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allocation-Wise Report
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CUG Status Report
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Active/De-Active Report
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload CUG Bill
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload New CUG Nos
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded border-solid border-2 w-56">
              Provider
            </button>
          </div>
        </div>
        <div className="flex-1 p-4">
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Admin
