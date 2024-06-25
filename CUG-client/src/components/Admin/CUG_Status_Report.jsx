import React, { useEffect, useState } from 'react';

const CUG_Status_Report = () => {
  const [activeCUGs, setActiveCUGs] = useState([]);
  const [deactivatedCUGs, setDeactivatedCUGs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredActiveCUGs, setFilteredActiveCUGs] = useState([]);
  const [filteredDeactivatedCUGs, setFilteredDeactivatedCUGs] = useState([]);

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
        const response = await fetch('http://127.0.0.2:4000/api/cug_staus/deactivate_data', {
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

  const handleDelete = async (cugNo) => {
    try {
      const response = await fetch('http://127.0.0.2:4000/api/cug_staus/deactivate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cugNo })
      });

      if (response.ok) {
        setFilteredActiveCUGs(filteredActiveCUGs.filter(data => data.cugNo !== cugNo));
        setFilteredDeactivatedCUGs([...filteredDeactivatedCUGs, activeCUGs.find(data => data.cugNo === cugNo)]);
        console.log('CUG No. deactivated and added to deactivated list');
      } else {
        console.error('Failed to deactivate CUG No.');
      }
    } catch (error) {
      console.error('Error deactivating CUG No.:', error);
    }
  };
  const handleReactivate = async (cugNo) => {
    try {
      const response = await fetch('http://127.0.0.2:4000/api/cug_staus/reactivate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cugNo })
      });
  
      if (response.ok) {
        const reactivatedCUG = deactivatedCUGs.find(data => data.cugNo === cugNo);
        setActiveCUGs([...activeCUGs, reactivatedCUG]);
        setDeactivatedCUGs(deactivatedCUGs.filter(data => data.cugNo!== cugNo));
        setFilteredActiveCUGs([...filteredActiveCUGs, reactivatedCUG]);
        setFilteredDeactivatedCUGs(filteredDeactivatedCUGs.filter(data => data.cugNo!== cugNo));
        console.log('CUG No. reactivated and removed from deactivated list');
      } else {
        console.error('Failed to reactivate CUG No.');
      }
    } catch (error) {
      console.error('Error reactivating CUG No.:', error);
    }
  };
  return (
    <div className="container mx-auto p-6 bg-blue-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">CUG Status Report</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by CUG No."
        className="mb-6 p-2 border border-blue-300 rounded-lg w-full max-w-md"
      />
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">ActiveCUG Numbers</h2>
        <ul className="list-disc pl-8 space-y-2">
          {filteredActiveCUGs.map((Data) => (
            <li key={Data._id} className="text-blue-700">
              <span className="font-medium">{Data.cugNo}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Deactivated CUG Numbers</h2>
        <ul className="list-disc pl-8 space-y-2">
          {filteredDeactivatedCUGs.map(Data => (
            <li key={Data._id} className="text-blue-700">
              <span className="font-medium">{Data.cugNo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CUG_Status_Report;