/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from '../../store/Auth';

const Create_Dealer = () => {
  const [user, setuser] = useState({
    username: "",
    employeeid: "",
    department:"",
    phone: "",
    password: "",
  });

  const [visible, setvisible] = useState(false)

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { UserAuthorization } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerURL = "http://127.0.0.2:4000/api/auth/register";
      const response = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": UserAuthorization, // Use existing admin token for authorization
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Dealer created successfully");
        navigate("/admin");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-form md:w-[30vw] m-auto">
              <h1 className="main-heading text-center text-4xl font-bold text-[#7B2CBF] pb-5">
                Create Dealer
              </h1>
              <br />
              <form onSubmit={handleSubmit} className="pb-10">
                <div className="space-y-5">
                  {/* for username */}
                  <div className="space-y-2">
                    <label htmlFor="username"  className=' text-gray-700 font-bold '>Name <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        id="username"
                        required
                        autoComplete="off"
                        value={user.username}
                        onChange={handleInput}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>

                  {/* for employee id */}
                  <div className="space-y-2">
                    <label htmlFor="employeeid"  className=' text-gray-700 font-bold '>Employee Id <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="employeeid"
                        placeholder="Enter your Employee ID"
                        id="employeeid"
                        required
                        autoComplete="off"
                        value={user.employeeid}
                        onChange={handleInput}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>

                  {/* for department */}
                  <div className="space-y-2">
                    <label htmlFor="department"  className=' text-gray-700 font-bold '>Department <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="department"
                        placeholder="Enter your Department"
                        id="department"
                        required
                        autoComplete="off"
                        value={user.department}
                        onChange={handleInput}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>

                  {/* for phone number */}
                  <div className="space-y-2">
                    <label htmlFor="phone"  className=' text-gray-700 font-bold ' >Phone <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>

                  {/* for password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className=' text-gray-700 font-bold '>Password <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <div className="mt-2.5 ml-2 text-gray-600" onClick={() => { setvisible(!visible) }}>
                        {visible ? <FaEye /> : <FaEyeSlash />}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <p className="text-gray-500 text-sm">
    Password must be at least 8 characters long and contain a mix of uppercase and lowercase letters, numbers, and special characters.
  </p>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-submit m-auto bg-[#7B2CBF] py-2 mt-5 font-bold w-full rounded-md text-white"
                  >
                    Register Dealer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Create_Dealer;
