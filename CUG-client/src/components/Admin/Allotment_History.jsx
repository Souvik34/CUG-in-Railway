import React, { useState, useEffect } from "react";

const Allotment_history = () => {
  const [cugNo, setCugNo] = useState("");
  const [employees, setEmployees] = useState([]);
  const [deactivatedCug, setdeactivatedCug] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleCugNoChange = (event) => {
    setCugNo(event.target.value);
  };

  const fetchAllCugData = async () => {
    try {
      const URL = "http://127.0.0.2:4000/api/add_cug/all_data";
      const response = await fetch(URL, {
        method: "GET"
      });
      const EmpData = await response.json();
      console.log(EmpData.allData);
      setEmployees(EmpData.allData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllDeactivatedCugData = async () => {
    try {
      const URL = "http://127.0.0.2:4000/api/cug_staus/deactivate_data";
      const response = await fetch(URL, {
        method: "GET"
      });
      const EmpData = await response.json();
      console.log("deactivated cug",EmpData.allData);
      setdeactivatedCug(EmpData.allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCugData();
    fetchAllDeactivatedCugData();
  }, []);


  useEffect(() => {
    // Auto-filter employees based on the entered CUG No.
    const filtered = employees.filter((employee) =>
      employee.cugNo.includes(cugNo)
    );
    setFilteredEmployees(filtered);
    console.log('Filtered Employees:', filtered);
  }, [cugNo, employees]);

  return (
    <div className="container mx-auto my-4 p-10">
      <h2 className="text-left md:text-left text-xl font-bold mb-4 text-black">Allotment History</h2>
      <form >
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
      <table className="table-auto w-full border border-black">
        <thead>
          <tr className="bg-gray-100 border border-black">
            <th className="px-4 py-2">CUG NO.</th>
            <th className="px-4 py-2">Previous</th>
            <th className="px-4 py-2">Current</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((i) => (
            <tr key={i.id} className="border border-black ">
              {/* CUG no C1 */}
              <td className="flex text-center items-center h-full bg-[#C77DFF] justify-center px-4 py-2">
                <div className="font-semibold text-center text-white">
                  CUG No: {i.cugNo}
                </div>
              </td>
              {/* previous c2 */}
              {deactivatedCug.map((j)=>{
              return <td className="px-4 py-2 border border-black">
                <div className="flex rounded-md py-2 px-3">
                  <h1 className="">Name:</h1> <h1 className="text-gray-600">{j.firstName} {j.lastName}</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Employee ID: <h1 className="text-gray-600"> {j.cugNo}</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Plan: <h1 className="text-gray-600"> Monthly</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Date: <h1 className="text-gray-600"> 2/3/2024</h1>
                </div>
              </td>
              })}
              {/* Current c3 */}
              <td className="px-4 py-2">
                <div className="flex rounded-md py-2 px-3">
                  Name: <h1 className="text-gray-600"> {i.firstName} {i.lastName}</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Employee ID: <h1 className="text-gray-600">{i.empNo}</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Plan: <h1 className="text-gray-600">{i.plan}</h1>
                </div>
                <div className="flex rounded-md py-2 px-3">
                  Date:<h1 className="text-gray-600">{i.createdAt}</h1>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allotment_history;
