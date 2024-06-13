/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const Dealer = () => {
  return (
    <div className="overflow-y-hidden">
      {/* dealer navbar */}
      <nav className="h-full text-center bg-custom-gradient drop-shadow-2xl">
        <h1 className="text-4xl font-semibold py-5  text-white">
          DEALER PORTAL
        </h1>
      </nav>
      {/* Side bar for dealer */}
      <div className="bg-white min-h-screen flex">
        <div className="bg-gray-800 w-64 p-4 h-screen overflow-y-auto">
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
        <div className="bg-white w-2/3 md:w-3/4 p-8 text-gray-800">
          {/* Content for the Dealer Portal */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Dealer;
