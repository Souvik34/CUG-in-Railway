/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
    getValues,
    reset
  } = useForm()

  const [draftData, setDraftData] = useState({});
  const [isDraft, setIsDraft] = useState(false);
  const [showDraft, setShowDraft] = useState(false);

  useEffect(() => {
    // Load draft data from localStorage when the component mounts
    const storedDraftData = localStorage.getItem('draftData');
    if (storedDraftData) {
      setDraftData(JSON.parse(storedDraftData));
      setIsDraft(true);
    }
  }, []);

  useEffect(() => {
    // Save draft data to localStorage when it changes
    if (isDraft) {
      localStorage.setItem('draftData', JSON.stringify(draftData));
    }
  }, [draftData, isDraft]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (isDraft) {
      setDraftData(data);
      toast.info('Draft updated!');
    }
    else
    {
      try {
      
        const response = await axios.post('http://127.0.0.2:4000/api/add_cug', data);
        toast.success('Data submitted successfully!');
        // console.log(response.data);
   
      } catch (error) {
        // console.error(error);
        // Handle error response from backend
        if (error.response?.status === 401)  {
          // CUG number already exists
          toast.error('CUG number already exists!');
        } 
        if (error.response?.status === 402)  {
          // CUG number already exists
          toast.error('Employee number already exists!');
        } 
        
        else {
          toast.error('Failed to submit data!');
        }
      }
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

  const handleSaveDraft = () => {
    const formData = getValues();
    console.log(formData); // Check the console for the form data
    setDraftData(formData);
    setIsDraft(true);
    console.log(draftData); // Check the console for the updated draft data
    console.log(isDraft); // Check the console for the updated isDraft state
    toast.info('Draft saved!');
  };

  const handleModifyDraft = () => {
    reset(draftData); // Reset the form to the draft values
    toast.info('Form reset to draft values!');
  };

  const handleShowDraft = () => {
    setShowDraft(true);
  };

  const handleHideDraft = () => {
    setShowDraft(false);
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
            placeholder='Enter your CUG number'
            className="shadow appearance-none border rounded w-5/12 ml-[21.8rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('cugNo', { required: true })}
            />
            </label>
            {errors.empNo && <p className="text-red-500">Enter valid CUG number</p>}
            
        </div>
 

      {/* Employment no */}

        <div className="mb-4">
          <label htmlFor="empNo" className="block text-gray-700 font-bold mb-2">
            Employement No.
          <input
            type="text"
            id="empNo"
            placeholder='Enter your Employement number'
            className="shadow appearance-none border rounded w-5/12 ml-[17.6rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('empNo', { required: true })}
            />
            </label>
          {errors.empNo && <p className="text-red-500">Enter valid employment number</p>}
        </div>

        {/* Personal details */}
        <div className="grid grid-cols-2 gap-0 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              Name
            <input
              type="text"
              id="firstName"
              placeholder='first name'
              className="shadow appearance-none border rounded w-[33%]  ml-[22.7rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('firstName', { required: true })}
              />
              </label>
            {errors.firstName && <p className="text-red-500">First name is required</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block font-bold mb-2 ">

            <input
              type="text"
              id="lastName"
              placeholder='last name'
              className="shadow appearance-none border rounded w-[35%] ml-[2.5rem] mt-[2] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              {...register('lastName', { required: true })}
              />
              </label>
            {errors.lastName && <p className="text-red-500">Last name is required</p>}
          </div>
        </div>
        <hr className='border-[1.1px] border-blue-300 rounded'/>
        
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700 font-bold mt-5">
            Designation
          <input
            type="text"
            id="designation"
            placeholder='Enter your Designation'
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
            placeholder='Enter your Division'
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
            placeholder='Enter your Department'
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
            placeholder='Enter your Bill Unit'
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
            placeholder="Enter your Allocation"
            className="shadow appearance-none border rounded w-5/12 ml-[20.7rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            placeholder='Enter your operator'
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
            placeholder='Enter your plan'
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
        
          {isDraft ? (
            <div>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleModifyDraft}
              >
                Modify Draft
              </button>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleShowDraft}
              >
                View Draft
              </button>
              {showDraft && (
                <div>
                  <h2>Draft Data:</h2>
                  <ul>
                    {Object.keys(draftData).map((key, index) => (
                      <li key={index}>
                        <strong>{key}</strong>: {draftData[key]}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                    onClick={handleHideDraft}
                  >
                    Hide Draft
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSaveDraft}
            >
              Save Draft
            </button>
          )}
         
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





