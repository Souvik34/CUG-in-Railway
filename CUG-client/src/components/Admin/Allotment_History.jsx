import React, { useState, useEffect } from "react";

const Allotment_history = () => {
  const [cugNo, setCugNo] = useState("");
  const [employees, setEmployees] = useState([]);
  const [deactivatedCug, setDeactivatedCug] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filteredDeactivatedCug, setFilteredDeactivatedCug] = useState([]);

  const handleCugNoChange = (event) => {
    setCugNo(event.target.value);
  };

  const fetchAllCugData = async () => {
    try {
      const URL = "http://127.0.0.2:4000/api/add_cug/all_data";
      const response = await fetch(URL, {
        method: "GET",
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
        method: "GET",
      });
      const EmpData = await response.json();
      console.log("deactivated cug", EmpData.allData);
      setDeactivatedCug(EmpData.allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCugData();
    fetchAllDeactivatedCugData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auto-filter employees based on the entered CUG No.
    const filtered = employees.filter((employee) =>
      employee.cugNo.includes(cugNo)
    );
    setFilteredEmployees(filtered);

    // Filter deactivated CUGs based on the entered CUG No.
    const filteredDeactivated = deactivatedCug.filter((deactivated) =>
      deactivated.cugNo.includes(cugNo)
    );
    setFilteredDeactivatedCug(filteredDeactivated);

    console.log('Filtered Employees:', filtered);
    console.log('Filtered Deactivated CUGs:', filteredDeactivated);
  };

  return (
    <div className="container mx-auto my-4 p-10">
      <h2 className="text-left md:text-left text-xl font-bold mb-4 text-black">
        Allotment History
      </h2>
      <form onSubmit={handleSubmit}>
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
      <div className="flex justify-center items-center py-2 bg-gray-100">
        {filteredEmployees.map((i) => (
          <div className="border border-black w-full" key={i.id}>
            <table className="min-w-full divide-y divide-black">
              <thead className="w-full">
                <tr className="text-center items-center w-full ">
                  <th className="px-6 py-3 text-left text-xl font-bold text-[#3C096C] ">
                    CUG No. : {i.cugNo}
                  </th>
                </tr>
              </thead>
              <thead>
                <tr className="border-t border-black">
                  <th className="px-6 py-4 font-semibold text-center border-r border-black w-1/2">
                    Previous
                  </th>
                  <th className="px-6 py-4 font-semibold text-center w-1/2">
                    Current
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-black">
                  {/* Previous CUG */}
                  <td className="  border border-black">
                    {filteredDeactivatedCug.map((previousCug, index) => (
                      <div key={index} className="border-b-2 border-black">
                        <div className="flex rounded-md   py-2 px-3">
                          <h1>Name:</h1>{" "}
                          <h1 className="text-gray-600">
                            {previousCug.firstName} {previousCug.lastName}
                          </h1>
                        </div>
                        <div className="flex rounded-md py-2 px-3">
                          Employee ID:{" "}
                          <h1 className="text-gray-600">{previousCug.empNo}</h1>
                        </div>
                        <div className="flex rounded-md py-2 px-3">
                          Plan:{" "}
                          <h1 className="text-gray-600">{previousCug.plan}</h1>
                        </div>
                        <div className="flex rounded-md py-2 px-3">
                          Date:{" "}
                          <h1 className="text-gray-600">
                            {previousCug.createdAt}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </td>

                  {/* Current CUG */}
                  <td className="px-4 py-2">
                    <div className="flex rounded-md py-2 px-3">
                      Name:{" "}
                      <h1 className="text-gray-600">
                        {i.firstName} {i.lastName}
                      </h1>
                    </div>
                    <div className="flex rounded-md py-2 px-3">
                      Employee ID:{" "}
                      <h1 className="text-gray-600">{i.empNo}</h1>
                    </div>
                    <div className="flex rounded-md py-2 px-3">
                      Plan:{" "}
                      <h1 className="text-gray-600">{i.plan}</h1>
                    </div>
                    <div className="flex rounded-md py-2 px-3">
                      Date:
                      <h1 className="text-gray-600">{i.createdAt}</h1>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allotment_history;
