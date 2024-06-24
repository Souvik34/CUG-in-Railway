/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const Dealer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="">
      {/* dealer navbar */}
      <nav className="w-full bg-custom-gradient flex items-center justify-between">
        {/* logout button */}
        <div className="text-base font-medium space-x-5 lg:block">
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="py-2 px-5 border rounded text-white bg-[#4895EF] hover:bg-[#3C096C] ml-5"
            >
              Logout
            </Link>
          ) : (
            ""
          )}
        </div>

        <h1 className="text-4xl font-semibold py-5 text-white text-center flex-grow">
          DEALER PORTAL
        </h1>
      </nav>
      {/* Side bar for dealer */}
      <div className=" min-h-screen flex">
        <div className="bg-gray-800 w-64 p-4">
          <Link to="add_new_cug">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
              Add New CUG
            </button>
          </Link>
          <Link to="activate_deactivate_cug">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
              Activate / De-Activate CUG
            </button>
          </Link>
          <Link to="allocation_wise_report">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
              Allocation-Wise Report
            </button>
          </Link>
          <Link to="plan_wise_billing_report">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4 border-2 w-full">
              Plan-Wise Billing Report
            </button>
          </Link>
        </div>
       
        <Outlet />
      </div>
    </div>
  );
};
export default Dealer;
