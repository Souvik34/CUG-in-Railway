/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import axios from 'axios'; 
import { toast } from 'react-toastify';



const Add_New_CUG = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm()



  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      
      const response = await axios.post('http://127.0.0.2:4000/api/add_cug', data);
      toast.success('Data submitted successfully!');
      // console.log(response.data);
 
    } catch (error) {
      // console.error(error);
      // Handle error response from backend
      toast.error('Failed to submit data!');
    }
 
  };

  const handleCancel = () => {
    const confirmClear = window.confirm('Are you sure you want to clear all data?');
    if (confirmClear) {
      // Clear the data here
      // console.log('Data cleared!');
      toast.info('Data cleared!');
    }
    reset(); 
  };
  return (
    
    <div className="container mx-auto my-4 p-10 bg-slate-100">
      <h1 className="text-2xl font-bold mb-4">Your account</h1>
      <p className="text-gray-600 mb-6">
        Provide information about yourself for identity
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>


      <div className="mb-4">
  <label htmlFor="cugNo" className="block font-bold mb-2">
    CUG No.
  <input
            type="number"
            id="cugNo"
            className="shadow appearance-none border rounded w-5/12 ml-[17.6rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('cugNo', { required: true })}
            />
            </label>
            
          {errors.empNo && <p className="text-red-500">Enter valid employment number</p>}
        </div>
 

      {/* Employment no */}

        <div className="mb-4">
          <label htmlFor="empNo" className="block text-gray-700 font-bold mb-2">
            Employement No.
          <input
            type="text"
            id="empNo"
            className="shadow appearance-none border rounded w-5/12 ml-[17.6rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('empNo', { required: true })}
            />
            </label>
          {errors.empNo && <p className="text-red-500">Enter valid employment number</p>}
        </div>

        {/* Personal details */}
        <div className="grid grid-cols-2 gap-0 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-2/5  ml-[22.5rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('name', { required: true })}
              />
              </label>
            {errors.name && <p className="text-red-500">First name is required</p>}
          </div>
         
        </div>
        <hr className='border-[1.1px] border-blue-300 rounded'/>
        
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700 font-bold mt-5">
            Designation
          <input
            type="text"
            id="designation"
            className="shadow appearance-none border rounded w-5/12  ml-[20rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('designation', { required: true })}
            />
            </label>        
          {errors.designation && <p className="text-red-500">Enter your Designation</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="division" className="block text-gray-700 font-bold mb-2">
            Division
          <input
            type="text"
            id="division"
            className="shadow appearance-none border rounded w-5/12 ml-[21.8rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('division', { required: true })}
            />
            </label>
          {errors.division && <p className="text-red-500">Invalid division</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
            Department
          <input
            type="text"
            id="department"
            className="shadow appearance-none border rounded w-5/12 ml-[20rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('department', { required: true })}
            />
            </label>
          {errors.department && <p className="text-red-500">Enter your department</p>}
        </div>

        <hr className='border-[1.1px] border-blue-300 rounded' />
        {/* Bill unit */}
          <div className="mb-4 mt-8">
          <label htmlFor="billUnit" className="block text-gray-700 font-bold mb-2">
            Bill Unit
          <input
            type="number"
            id=""
            className="shadow appearance-none border rounded w-5/12 ml-[21.8rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('billUnit', { required: true })}
            />
            </label>
          {errors.billUnit && <p className="text-red-500">Enter your bill unit</p>}
        </div>

          <div className="mb-4">
          <label htmlFor="allocation" className="block text-gray-700 font-bold mb-2">
            Allocation
          <input
            type="text"
            id="allocation"
            placeholder="Allocation"
            className="shadow appearance-none border rounded w-5/12 ml-[20.7rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-light"
            {...register('allocation', { required: true })}
            />
            </label>
          {errors.allocation && <p className="text-red-500">Enter the allocation</p>}
        </div>

       
        <div className="mb-4">
          <label htmlFor="operator" className="block text-gray-700 font-bold mb-2">
            Operator
          <input
            type="text"
            id="operator"
            className="shadow appearance-none border rounded w-5/12  ml-[21.3rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('operator', { required: true })}
            />
            </label>
          {errors.operator && <p className="text-red-500">Enter your operator</p>}
        </div>

          <div className="mb-4">
          <label htmlFor="plan" className="block text-gray-700 font-bold mb-2">
            Plan
          <input
            type="text"
            id="plan"
            className="shadow appearance-none border rounded w-5/12  ml-[23.2rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('plan', { required: true })}
            />
            </label>
          {errors.plan && <p className="text-red-500">Enter your plan</p>}
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
            onClick={handleCancel}
          >
            Clear All
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





