/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
const Allocation_Wise_Report = () => {
  const [AllData, setAllData] = useState([])
  const data = [
    { allocation: "00873105", date: "14/05/2024", amount: "11,025.00" },
    { allocation: "00873106", date: "14/05/2024", amount: "11,805.00" },
    { allocation: "02030519", date: "14/05/2024", amount: "352.00" },
    { allocation: "03011319", date: "14/05/2024", amount: "6,615.00" },
    { allocation: "03021319", date: "14/05/2024", amount: "9,475.00" },
    { allocation: "03031319", date: "14/05/2024", amount: "2,270.00" },
    { allocation: "03041319", date: "14/05/2024", amount: "2,881.00" },
    { allocation: "03053319", date: "14/05/2024", amount: "9,495.00" },
    { allocation: "03061319", date: "14/05/2024", amount: "2,781.00" },
    { allocation: "03071319", date: "14/05/2024", amount: "2,821.00" },
    { allocation: "03081319", date: "14/05/2024", amount: "5,495.00" },
    { allocation: "03091319", date: "14/05/2024", amount: "3,151.00" },
    { allocation: "03092319", date: "14/05/2024", amount: "4,560.00" },
    { allocation: "03093319", date: "14/05/2024", amount: "729.00" },
    { allocation: "11021519", date: "14/05/2024", amount: "2,702.00" },
    { allocation: "12011619", date: "14/05/2024", amount: "3,059.00" },
  ];
  const totals = {
    grandTotal: "79,216.00",
    cgst: "7,129.00",
    sgst: "7,129.00",
    totalPayable: "93,474.00",
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

  useEffect(() => {
    fetchAllCugData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-700">Allocation wise Bill</h3>
          <p className="mt-2 text-sm text-gray-600">For the Month of : April 2024</p>
        </div>
        <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (Rs.)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {AllData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.allocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <p className="text-sm font-medium text-gray-700">Grand Total: {totals.grandTotal}</p>
          <p className="text-sm font-medium text-gray-700">CGST Rs.: {totals.cgst}</p>
          <p className="text-sm font-medium text-gray-700">SGST Rs.: {totals.sgst}</p>
          <p className="text-sm font-bold text-gray-900">Total Payable Rs.: {totals.totalPayable}</p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Passed for Rs. {totals.totalPayable} (Rupees Ninety-Three Thousand Four Hundred Seventy-Four Only) and forwarded to FA & CAO/X/BBS for audit and arranging the payment of net amount of Rs. {totals.totalPayable} (Rupees Ninety-Three Thousand Four Hundred Seventy-Four Only)</p>
          <p className="mt-4 text-sm text-gray-700">For PCSTE/ECoR</p>
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={handlePrint} 
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );

}

export default Allocation_Wise_Report;
