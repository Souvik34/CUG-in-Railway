/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

const Allotment_history = () => {
  const [cugNo, setCugNo] = useState('');

  const handleCugNoChange = (event) => {
    setCugNo(event.target.value);
  };

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
                Employee ID
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Plan
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Date
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
            </td>
            {/* Current c3 */}
            <td className="px-4 py-2">
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Name
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Employee ID
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Plan
                {/* <div className="mt-2 bg-gray-200 rounded-md p-2 h-8" /> */}
              </div>
              <div className="flex border border-gray-400 rounded-md py-2 px-3">
                Date
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
     
      <div className="flex justify-center mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mr-2">
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mr-2">
          page 1 of 10
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}

export default Allotment_history
