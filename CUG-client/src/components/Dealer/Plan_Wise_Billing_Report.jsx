/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

const Plan_Wise_Billing_Report = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.2:4000/api/add_cug/plans_and_departments", {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setRows(data);
        } else {
          setError('Invalid response format. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // return (

  //   <div className="bg-gray-100 ml-[15rem] h-screen flex justify-center">
  //     <main className="p-6">
  //       <div className="text-center">
  //         <h3 className="text-4xl font-bold text-[#2E2D93]">Plan wise Bill</h3>
  //         <p className=" text-lg mb-4 text-gray-600">For the Month of : April 2024</p>
  //       </div>
  //       <div className="bg-white rounded-md shadow-md overflow-hidden">
  //         <div className="p-4 flex items-center justify-between">
  //           <div className="flex items-center">
  //           </div>
  //         </div>
  //         <table className="min-w-full divide-y divide-gray-300">
  //           <thead>
  //             <tr>
  //               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
  //               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
  //               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
  //               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (Rs.)</th>
  //             </tr>
  //           </thead>
  //           <tbody className="bg-white divide-y divide-gray-200">
  //             {rows.filter((row, index, self) => {
  //               const duplicateIndex = self.findIndex((otherRow) => otherRow.plan === row.plan && otherRow.department === row.department);
  //               return duplicateIndex === index;
  //             }).map((row, index) => (
  //               <tr key={index}>
  //                 <td className="px-20 py-2 text-sm">{row.plan}</td>
  //                 <td className="px-20 py-2 text-sm">{row.department}</td>
  //                 <td className="px-20 py-2 text-sm">14/05/2024</td>
  //                 <td className="px-20 py-2 text-sm">{row.amount * row.no_of_employees}</td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>

  //       <div className="mt-8 text-center">
  //         <p className="text-sm text-gray-600">Passed for Rs.XXXXX and forwarded to FA & CAO/X/BBS for audit and arranging the payment of net amount of Rs. XXXXXX </p>
  //         <p className="mt-4 text-sm text-gray-700">For PCSTE/ECoR</p>
  //       </div>
  //     </main>
  //   </div>
  // );

  return (
    <div className="bg-gray-100 ml-[15rem] h-screen flex justify-center">
      <main className="p-6">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#2E2D93]">Plan wise Bill</h3>
          <p className="text-lg mb-4 text-gray-600">For the Month of : April 2024</p>
        </div>
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
            </div>
          </div>
          <div className="overflow-x-auto"> {/* Add this wrapper */}
            <table className="max-w-full min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (Rs.)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.filter((row, index, self) => {
                  const duplicateIndex = self.findIndex((otherRow) => otherRow.plan === row.plan && otherRow.department === row.department);
                  return duplicateIndex === index;
                }).map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm">{row.plan}</td>
                    <td className="px-4 py-2 text-sm">{row.department}</td>
                    <td className="px-4 py-2 text-sm">14/05/2024</td>
                    <td className="px-4 py-2 text-sm">{row.amount * row.no_of_employees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Passed for Rs.XXXXX and forwarded to FA & CAO/X/BBS for audit and arranging the payment of net amount of Rs. XXXXXX </p>
          <p className="mt-4 text-sm text-gray-700">For PCSTE/ECoR</p>
        </div>
      </main>
    </div>
  );
};

export default Plan_Wise_Billing_Report;
