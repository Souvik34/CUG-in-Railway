/* eslint-disable no-unused-vars */
// import React from 'react'
// import { useState } from 'react';
import React, { useState, useEffect } from "react";

const Allotment_history = () => {
  const [cugNo, setCugNo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleCugNoChange = (event) => {
    setCugNo(event.target.value);
  };
  // Pagignation function

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const { startIndex, endIndex } = calculatePageRange();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log('CUG No:', cugNo);
  };
  return (
    <div className="bg-gray-200 w-5/6  p-2 rounded-md ">
      <h2 className="text-left md:text-center  text-xl font-bold mb-4  bg-purple-400 text-white">Allotment History</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-400 rounded-md py-2 px-3 flex-1 mr-2"
            placeholder="CUG No."
            value={cugNo}
            onChange={handleCugNoChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">CUG NO.</th>
            <th className="px-4 py-2">Previous</th>
            <th className="px-4 py-2">Current</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {/* CUG no C1 */}
            <td className="flex text-center justify-center items-center px-4 py-2">
              <div className="font-semiboldbold text-center">
                CUG No:
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div><h4>123455</h4></div>
            </td>
            {/* previous c2 */}
            <td className="px-4 py-2">
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Name:
                <h1>Deedhiti</h1>
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Employee ID:
                <h1>DEE123</h1>
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Plan:
                <h1>Monthly</h1>
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Date:
                <h1>
                  2/3/2024
                </h1>
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
            </td>
            {/* Current c3 */}
            <td className="px-4 py-2">
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Name:
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Employee ID:
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Plan:
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Date:
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <div className="h-48" />
            </td>
          </tr>
        </tbody>
      </table>

      
      {/* {result.length > 0 && ( */}
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={previousPage} className="hover:underline">
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          {/* )} */}
     
      {/* <div className="flex justify-center mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mr-2">
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mr-2">
          page 1 of 10
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">
          Next
        </button>
      </div> */}
    </div>
  );
}

export default Allotment_history
