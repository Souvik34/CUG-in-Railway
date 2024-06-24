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
                    <label htmlFor="username">Name</label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="username"
                        placeholder="Ex: Rohan roy"
                        id="username"
                        required
                        autoComplete="off"
                        value={user.username}
                        onChange={handleInput}
                        className="black flex-1 border-0 py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* for employee id */}
                  <div className="space-y-2">
                    <label htmlFor="employeeid">Employee Id</label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="employeeid"
                        placeholder="1kj3nkn3"
                        id="employeeid"
                        required
                        autoComplete="off"
                        value={user.employeeid}
                        onChange={handleInput}
                        className="black flex-1 border-0 py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* for department */}
                  <div className="space-y-2">
                    <label htmlFor="department">Department</label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="text"
                        name="department"
                        placeholder="Ex: Account"
                        id="department"
                        required
                        autoComplete="off"
                        value={user.department}
                        onChange={handleInput}
                        className="black flex-1 border-0 py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* for phone number */}
                  <div className="space-y-2">
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        className="black flex-1 border-0 py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* for password */}
                  <div className="space-y-2">
                    <label htmlFor="password">Password</label>
                    <br />
                    <div className="flex rounded hover:ring-1 w-full">
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                        className="black flex-1 border-0 py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md sm:text-sm sm:leading-6"
                      />
                      <div className="mt-2.5 ml-2 text-gray-600" onClick={() => { setvisible(!visible) }}>
                        {visible ? <FaEye /> : <FaEyeSlash />}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
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
