import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const DealerLogin = () => {
  const [user, setuser] = useState({
    email:"",
    password:"",
  })  

  const [visible, setvisible] = useState(false)

  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value

    setuser({
      ...user,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(user);
}
  return (
      <div className='min-h-screen'>
       <nav className='h-full text-center bg-custom-gradient '>
        <h1 className="text-4xl font-semibold py-5 text-white">DEALER LOGIN</h1>
      </nav>
       <section className="flex justify-center items-center">          
          {/* for registration form */}
          <div className="md:w-[20vw] p-5 space-y-1 bg-white shadow-md rounded-lg mt-5">
            <h1 className="text-2xl font-bold text-center text-[#2E2D93]">Login</h1>
            <br />

            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                
                {/* for CUG No. */}
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">CUG No.</label>
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your CUG No."
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>

                    {/* for employee no. */}
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Employee No.</label>
                
                <input
                  type="text"
                  name="id"
                  placeholder="Enter employee no."
                  id="id"
                  required
                  autoComplete="off"
                  value={user.id}
                  onChange={handleInput}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
               <button type="submit" className="w-full py-2 px-4 bg-[#2E2D93] hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login</button>
              </div>
            </form>
          </div>
  </section>
    </div>
  )
}

export default DealerLogin
