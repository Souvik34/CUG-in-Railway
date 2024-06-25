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
      <div className="flex justify-center items-center py-2  bg-gray-100">
      {/* <div className="flex justify-center items-center min-h-scre bg-gray-100"> */}
      <div className="border border-black w-full">
        <table className="min-w-full divide-y divide-black">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xl font-bold text-black">CUG No. :</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-black">
              <td className="px-6 py-4 font-semibold text-center border-r border-black w-1/2">Previous</td>
              <td className="px-6 py-4 font-semibold text-center w-1/2">Current</td>
            </tr>
            <tr className="border-t border-black">
              <td className="px-6 py-4 border-r border-black h-40"></td>
              <td className="px-6 py-4 h-40"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    // </div>
  );
};

export default Allotment_history;
