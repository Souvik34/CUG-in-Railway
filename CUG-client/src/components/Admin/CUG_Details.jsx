


import React, { useState } from 'react';

const CUG_Details = () => {
  const [user, setUser] = useState({ cugNo: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://127.0.0.2:4000/api/add_cug/all_data", {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data.allData);
        
        // Filter the data based on the CUG number
        const filtered = data.allData.filter((item) => item.cugNo === user.cugNo);
        setFilteredData(filtered);
        
        setIsVisible(true);
        console.log("filtered data", filtered);
      } else {
        console.error('Failed to fetch employee data');
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleDeactivate = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/deactivateCugNo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cugNo: user.cugNo
        })
      });

      if (response.ok) {
        alert('CUG No. deactivated successfully');
        setFilteredData([]);
        setIsVisible(false);
      } else {
        console.error('Failed to deactivate CUG No.');
      }
    } catch (error) {
      console.error('Error deactivating CUG No.:', error);
    }
  };

  return (
    <div className='min-h-screen'>
      <nav className="w-full text-center bg-dealer-gradient">
        <h1 className="text-4xl font-semibold py-5 text-white"></h1>
      </nav>
      <section className="flex justify-center items-center ml-72">
        <div className="md:w-[35vw] md:h-[full] p-5 space-y-6 bg-white shadow-md rounded-lg mt-10">
          <h1 className="text-2xl font-bold text-center text-[#2E2D93]">CUG NO</h1>
          <br />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cugNo" className="block text-sm font-medium text-gray-700">CUG No.</label>
              <input
                type="text"
                name="cugNo"
                placeholder="Enter your CUG No."
                id="cugNo"
                required
                autoComplete="off"
                value={user.cugNo}
                onChange={handleInput}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-[#2E2D93] hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">GO</button>
              {filteredData.map((Data) => (
                <div className="flex flex-col space-y-2 mt-4" key={Data._id}>
                  <h2 className="p-4 bg-gray-100 rounded shadow">EMP NO: <span>{Data.empNo}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">NAME: <span>{Data.name}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DESIGNATION: <span>{Data.designation}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DIVISION: <span>{Data.division}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DEPARTMENT: <span>{Data.department}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">BILL UNIT: <span>{Data.billUnit}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">ALLOCATION: <span>{Data.allocation}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">EMPLOYEE STATUS: <span>{Data.status}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">PLAN: <span>{Data.plan}</span></h2>
                  <button
                    onClick={handleDeactivate}
                    className="p-4 bg-blue-500 text-white rounded shadow mt-2 hover:bg-blue-700"
                  >
                    DEACTIVATE
                  </button>
                </div>
              ))}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CUG_Details;
