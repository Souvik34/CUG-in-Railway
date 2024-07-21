import React, { useEffect, useState } from 'react';

const CUG_Status_Report = () => {
  const [activeCUGs, setActiveCUGs] = useState([]);
  const [deactivatedCUGs, setDeactivatedCUGs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredActiveCUGs, setFilteredActiveCUGs] = useState([]);
  const [filteredDeactivatedCUGs, setFilteredDeactivatedCUGs] = useState([]);
  const [showActive, setShowActive] = useState(false);
  const [showDeactivated, setShowDeactivated] = useState(false);

  useEffect(() => {
    const fetchActiveCUGs = async () => {
      try {
        const response = await fetch('http://127.0.0.2:4000/api/add_cug/all_data', {
          method: 'GET',
        });
        const data = await response.json();
        setActiveCUGs(data.allData);
        setFilteredActiveCUGs(data.allData);
        console.log(data.allData);
      } catch (error) {
        console.error('Error fetching active CUG numbers:', error);
      }
    };

    const fetchDeactivatedCUGs = async () => {
      try {
        const response = await fetch('http://127.0.0.2:4000/api/cug_status/deactivate_data', {
          method: 'GET',
        });
        const data = await response.json();
        setDeactivatedCUGs(data.allData);
        setFilteredDeactivatedCUGs(data.allData);
        console.log(data.allData);
      } catch (error) {
        console.error('Error fetching deactivated CUG numbers:', error);
      }
    };

    fetchActiveCUGs();
    fetchDeactivatedCUGs();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredActive = activeCUGs.filter(cug => cug.cugNo.includes(query));
    const filteredDeactivated = deactivatedCUGs.filter(cug => cug.cugNo.includes(query));
    setFilteredActiveCUGs(filteredActive);
    setFilteredDeactivatedCUGs(filteredDeactivated);
  };
  
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">CUG Status Report</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by CUG No."
        className="mb-6 p-4 border border-blue-300 rounded-lg w-full max-w-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setShowActive(!showActive)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105 active:scale-95"
        >
          {showActive ? 'Hide' : 'Show'} Active CUG Numbers
        </button>
        <button
          onClick={() => setShowDeactivated(!showDeactivated)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105 active:scale-95"
        >
          {showDeactivated ? 'Hide' : 'Show'} Deactivated CUG Numbers
        </button>
      </div>
      <div className="flex justify-between w-full max-w-6xl">
        {showActive && (
          <div className="w-3/5 bg-white shadow-lg rounded-lg p-6 mb-12 mr-2">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Active CUG Numbers</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">S/N</th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">CUG NO</th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">EMP NO</th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">NAME</th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">DEPARTMENT</th>
                </tr>
              </thead>
              <tbody>
                {filteredActiveCUGs.map((Data, index) => (
                  <tr key={Data._id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{Data.cugNo}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{Data.empNo}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{Data.firstName}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{Data.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showDeactivated && (
          <div className="w-2/5 bg-white shadow-lg rounded-lg p-6 ml-2">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Deactivated CUG Numbers</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">S/N</th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 text-left">CUG NO</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeactivatedCUGs.map((Data, index) => (
                  <tr key={Data._id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{Data.cugNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CUG_Status_Report;


