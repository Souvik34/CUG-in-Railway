/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
const Allocation_Wise_Report = () => {
  const [AllData, setAllData] = useState([])
  const [AllocationTotal, setAllocationTotal] = useState([])
  
  const totals = {
    grandTotal: AllocationTotal.reduce((sum, { totalAmount }) => sum + totalAmount, 0).toFixed(2),
    cgst: (AllocationTotal.reduce((sum, { totalAmount }) => sum + totalAmount, 0) * 0.09).toFixed(2), // Assuming 9% CGST
    sgst: (AllocationTotal.reduce((sum, { totalAmount }) => sum + totalAmount, 0) * 0.09).toFixed(2), // Assuming 9% SGST
    totalPayable: (AllocationTotal.reduce((sum, { totalAmount }) => sum + totalAmount, 0) * 1.18).toFixed(2), // Assuming 18% GST
  };
  const handlePrint = () => {
    window.print();
  };
 
  const fetchAllCugData= async()=>{
    try {
      const response = await fetch("http://127.0.0.2:4000/api/add_cug/all_data", {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data.allData)
      setAllData(data.allData);
    } catch (error) {
      console.log(error);
    }
  } 
  const fetchAllocationTotal= async()=>{
    try {
      const response = await fetch("http://127.0.0.2:4000/api/add_cug/allocation_totals", {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data.allocations)
      setAllocationTotal(data.allocations);
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    fetchAllCugData()
    fetchAllocationTotal()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center w-full py-12 px-4 sm:px-6 lg:px-8 text-center justify-center" >
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-700">Allocation wise Bill</h3>
          <p className="mt-2 text-sm text-gray-600">For the Month of : April 2024</p>
        </div>
        <div>
          
        </div>
        <div className="mt-8 text-center overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="  min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 text-center py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
                <th className="px-6 text-center py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 text-center py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (Rs.)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {AllocationTotal.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.allocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14/05/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between px-28'>
        <div className="mt-4 text-left">
          <button 
            onClick={handlePrint} 
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Print
          </button>
        </div>

        <div className="mt-0 text-right">
          <p className="text-sm font-medium text-gray-700">Grand Total: {totals.grandTotal}</p>
          <p className="text-sm font-medium text-gray-700">CGST Rs.: {totals.cgst}</p>
          <p className="text-sm font-medium text-gray-700">SGST Rs.: {totals.sgst}</p>
          <p className="text-sm font-bold text-gray-900">Total Payable Rs.: {totals.totalPayable}</p>
        </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Passed for Rs. {totals.totalPayable} and forwarded to FA & CAO/X/BBS for audit and arranging the payment of net amount of Rs. {totals.totalPayable} </p>
          <p className="mt-4 text-sm text-gray-700">For PCSTE/ECoR</p>
        </div>
        
      </div>
    </div>
  );

}

export default Allocation_Wise_Report;
