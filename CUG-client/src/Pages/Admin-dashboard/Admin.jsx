/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink,Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import '../../index.css';

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
              className="py-2 px-5 border rounded text-white bg-[#ef4444] hover:bg-[#991b1b] ml-5"
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
        <NavLink to="create_dealer" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CREATE DEALER
            </button>
          </NavLink>
          <NavLink to="cug_details" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CUG DETAILS
            </button>
          </NavLink>

          <NavLink to="add_new_cug" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Add New CUG
            </button>
          </NavLink>

           <NavLink to="allotment_history" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allotment History
            </button>
          </NavLink>
          <NavLink to="allocation_wise_report" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Allocation-Wise Report
            </button>
          </NavLink>
          <NavLink to="cug_status_report" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              CUG Status Report
            </button>
          </NavLink>
          {/* <NavLink to="activate_deactivate_report" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Active/De-Active Report
            </button>
          </NavLink> */}
          <NavLink to="upload_cug_bill" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload CUG Bill
            </button>
          </NavLink>
          <NavLink to="upload_new_cug_nos" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Upload New CUG Nos
            </button>
          </NavLink>
          <NavLink to="discrepency_report" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 border-solid border-2 w-56">
              Discrepency Report
            </button>
          </NavLink>
          <NavLink to="provider" activeClassName="active">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded border-solid border-2 w-56">
              Provider
            </button>
          </NavLink>
        </div>
          
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;






