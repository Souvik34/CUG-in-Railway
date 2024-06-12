/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form';


const Add_New_CUG = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Submitted:', data);
    // Handle form submission here
  };
  return (
    
    <div className="container mx-auto p-4 bg-slate-100">
      <h1 className="text-2xl font-bold mb-4">Your account</h1>
      <p className="text-gray-600 mb-6">
        Provide information about yourself for identity
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <p className="text-red-500">First name is required</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <p className="text-red-500">Last name is required</p>}
          </div>
        </div>
        <hr />
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('designation', { required: true })}
          />
          {errors.designation && <p className="text-red-500">Enter your Designation</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="division" className="block text-gray-700 font-bold mb-2">
            Division
          </label>
          <input
            type="text"
            id="division"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('division', { required: true })}
          />
          {errors.division && <p className="text-red-500">Invalid division</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && <p className="text-red-500">Phone number is required</p>}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Roles</h2>
          <p className="text-gray-600 mb-2">
            This information is relevant to your authentication
          </p>
         
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  
    
  )
}

export default Add_New_CUG





