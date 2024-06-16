/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const Admin = () => {
  const { isLoggedIn } = useAuth();
  const {user,isLoading}= useAuth();
 console.log("Admin user Data",user)

//  if(isLoading){
//   return <h1>Loading...</h1>
//  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <div>
      <nav className="w-full bg-admin-gradient flex items-center justify-between">
        {/* logout button */}
        <div className="text-base font-medium space-x-5 lg:block">
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="py-2 px-5 border rounded text-white bg-[#C77DFF] hover:bg-[#3C096C] ml-5"
            >
              Logout
            </Link>
          ) : (
            ""
          )}
        </div>

        <h1 className="text-4xl font-semibold py-5 text-white text-center flex-grow">
          ADMIN PORTAL
        </h1>

        <div className="w-20"></div>
        {/* // This div is a placeholder to keep the spacing correct */}
      </nav>
      <div className="bg-gray-100  min-h-screen flex">
        <div className="bg-gray-800 w-64 p-4">
          <Link to="create_dealer">
            <button className="bg-purple-500 hover:bg-purple-700 text-white text-2xl font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CREATE DEALER
            </button>
          </Link>
          <Link to="cug_details">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CUG DETAILS
            </button>
          </Link>
          <Link to="add_new_cug">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Add New CUG
            </button>
          </Link>
          <Link to="allotment_history">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allotment History
            </button>
          </Link>
          <Link to="allocation_wise_report">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allocation-Wise Report
            </button>
          </Link>
          <Link to="cug_status_report">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CUG Status Report
            </button>
          </Link>
          <Link to="activate_deactivate_report">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Active/De-Active Report
            </button>
          </Link>
          <Link to="upload_cug_bill">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload CUG Bill
            </button>
          </Link>
          <Link to="upload_new_cug_nos">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload New CUG Nos
            </button>
          </Link>
          <Link to="provider">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded border-solid border-2 w-56">
              Provider
            </button>
          </Link>
        </div>
          
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
