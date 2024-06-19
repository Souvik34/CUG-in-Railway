import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const DealerLogin = () => {
  const [user, setUser] = useState({
    cugNo: ""
  });

  const [isVisible, setIsVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState(null);

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
      const response = await fetch('https://your-api-endpoint.com/getEmployeeData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cugNo: user.cugNo
        })
      });

      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data);
        setIsVisible(true);
      } else {
        console.error('Failed to fetch employee data');
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  return (
    <div className='min-h-screen'>
      <nav className="w-full text-center bg-dealer-gradient">
        <h1 className="text-4xl font-semibold py-5 text-white"></h1>
      </nav>
      <section className="flex justify-center items-center ml-72">
        {/* for registration form */}
        <div className="md:w-[35vw] md:h-[full] p-5 space-y-6 bg-white shadow-md rounded-lg mt-10">
          <h1 className="text-2xl font-bold text-center text-[#2E2D93]">CUG NO</h1>
          <br />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              {/* for CUG No. */}
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
              {isVisible && employeeData && (
                <div className="flex flex-col space-y-2 mt-4">
                  <h2 className="p-4 bg-gray-100 rounded shadow">EMP NO: <span>{employeeData.empNo}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">NAME: <span>{employeeData.name}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DESIGNATION: <span>{employeeData.designation}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DIVISION: <span>{employeeData.division}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DEPARTMENT: <span>{employeeData.department}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">BILL UNIT: <span>{employeeData.billUnit}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">ALLOCATION: <span>{employeeData.allocation}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">EMPLOYEE STATUS: <span>{employeeData.status}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">PLAN: <span>{employeeData.plan}</span></h2>
                  <h2 className="p-4 bg-gray-100 rounded shadow">DEACTIVATE</h2>  
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DealerLogin;

