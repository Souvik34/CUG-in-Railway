import React, { useEffect, useState } from 'react';

const CUG_Status_Report = () => {
  const [activeCUGs, setActiveCUGs] = useState([]);
  const [deactivatedCUGs, setDeactivatedCUGs] = useState([]);
  const token = 'your_jwt_token'; // Replace with actual token

  useEffect(() => {
    const fetchActiveCUGs = async () => {
      try {
        const response = await fetch('/api/cug/active', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setActiveCUGs(data);
      } catch (error) {
        console.error('Error fetching active CUG numbers:', error);
      }
    };

    const fetchDeactivatedCUGs = async () => {
      try {
        const response = await fetch('/api/cug/deactivated', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setDeactivatedCUGs(data);
      } catch (error) {
        console.error('Error fetching deactivated CUG numbers:', error);
      }
    };

    fetchActiveCUGs();
    fetchDeactivatedCUGs();
  }, [token]);

  return (
    <div className="container mx-auto p-6 bg-blue-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">CUG Status Report</h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Active CUG Numbers</h2>
        {activeCUGs.length > 0 ? (
          <ul className="list-disc pl-8 space-y-2">
            {activeCUGs.map(cug => (
              <li key={cug._id} className="text-blue-700">
                <span className="font-medium">{cug.number}</span> - {cug.status}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-blue-700">No active CUG numbers found.</p>
        )}
      </div>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Deactivated CUG Numbers</h2>
        {deactivatedCUGs.length > 0 ? (
          <ul className="list-disc pl-8 space-y-2">
            {deactivatedCUGs.map(cug => (
              <li key={cug._id} className="text-blue-700">
                <span className="font-medium">{cug.number}</span> - {cug.status}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-blue-700">No deactivated CUG numbers found.</p>
        )}
      </div>
    </div>
  );
};

export default CUG_Status_Report;
