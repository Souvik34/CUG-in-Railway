
import React, { useState } from 'react';

const CUG_Details = () => {
  const [user, setUser] = useState({ cugNo: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

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

        // Check if the CUG number is active
        const cugData = data.allData.find((item) => item.cugNo === user.cugNo);
        if (!cugData || cugData.status === 'active') {
          setAlertMessage('CUG No. is not active');
          return;
        }
        
        // Filter the data based on the CUG number
        const filtered = data.allData.filter((item) => item.cugNo === user.cugNo);
        setFilteredData(filtered);
        
        setIsVisible(true);
        console.log("filtered data", filtered);
      } else {
        console.error('Failed to fetch employee data');
        setAlertMessage('Error fetching employee data. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setAlertMessage('Error fetching employee data. Please try again later.');
    }
  };


  const handleDeactivate = async (cugNo) => {
    try {
      const response = await fetch('http://127.0.0.2:4000/api/cug_status/deactivate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cugNo })
      });
  
      if (response.ok) {
        console.log('CUG No. deactivated successfully');
        setFilteredData(filteredData.filter(data => data.cugNo !== cugNo));
        setAlertMessage('CUG No. deactivated successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to deactivate CUG No.:', errorData);
        setAlertMessage(`Failed to deactivate CUG No.: ${errorData.message}`);
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
      <section className="flex justify-center items-center ml-48">
        <div className="md:w-[60vw] md:h-[full] p-5 space-y-6 bg-white shadow-md rounded-lg mt-10 ml-3 items-center">
          
          <h1 className="text-4xl font-bold text-center text-[#2E2D93]">CUG Details</h1>
          <br />
          <p className="text-lg text-gray-600 text-center mb-4">Please enter your CUG number to fetch details.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {alertMessage && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                {alertMessage}
              </div>
            )}
            <div className='flex justify-center'>
              {/* <label htmlFor="cugNo" className="block text-sm text-center mb-4 font-medium text-gray-700"> Enter CUG Number</label> */}
              <input
                type="text"
                name="cugNo"
                placeholder="Enter your CUG No."
                id="cugNo"
                required
                autoComplete="off"
                value={user.cugNo}
                onChange={handleInput}
                className="mt-1 block w-[30rem] text-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-[5rem] text-center items-center py-2 px-4 bg-[#2E2D93] hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">GO</button>
            </div>
            <div className='flex justify-center'>
              {filteredData.map((Data) => (
                <div className="flex flex-col space-y-2 mt-4" key={Data._id}>
                  <div className="flex flex-row ml-4 justify-around min-w-max space-x-4">
                    <div className="w-1/3 flex flex-col">
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">EMP NO: <span>{Data.empNo}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">NAME: <span>{Data.firstName}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">DESIGNATION: <span>{Data.designation}</span></h2>
                    </div>
                    <div className="w-1/3 flex flex-col">
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">DIVISION: <span>{Data.division}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">DEPARTMENT: <span>{Data.department}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">BILL UNIT: <span>{Data.billUnit}</span></h2>
                    </div>
                    <div className="w-1/3 flex flex-col">
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">ALLOCATION: <span>{Data.allocation}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">EMPLOYEE STATUS: <span>{Data.status}</span></h2>
                      <h2 className="p-4 bg-gray-100 rounded shadow flex-grow">PLAN: <span>{Data.plan}</span></h2>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleDeactivate(Data.cugNo)}
                      className="p-4 bg-blue-500 text-white rounded shadow mt-2 hover:bg-blue-700 w-96"
                    >
                      DEACTIVATE
                    </button>
                  </div>
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
