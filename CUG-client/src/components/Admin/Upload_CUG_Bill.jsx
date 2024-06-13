/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'

function Upload_CUG_Bill() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="cug_no" className="block text-gray-700 font-bold mb-2">
            CUG NO
          </label>
          <input
            type="tel"
            id="cug_no"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('cug_no', { required: true })}
          />
          {errors.cug_no && <p className="text-red-500">CUG NO is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="periodic_charge" className="block text-gray-700 font-bold mb-2">
            PERIODIC CHARGE
          </label>
          <input
            type="text"
            id="periodic_charge"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('periodic_charge', { required: true })}
          />
          {errors.periodic_charge && <p className="text-red-500">Enter Periodic charge</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="usage_amount" className="block text-gray-700 font-bold mb-2">
            USAGE AMOUNT
          </label>
          <input
            type="text"
            id="usage_amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('usage_amount', { required: true })}
          />
          {errors.usage_amount && <p className="text-red-500">Enter Usage Amount</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="data_amount" className="block text-gray-700 font-bold mb-2">
            DATA AMOUNT
          </label>
          <input
            type="number"
            id="data_amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('data_amount', { required: true })}
          />
          {errors.data_amount && <p className="text-red-500">Enter Data amount</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="voice" className="block text-gray-700 font-bold mb-2">
            VOICE
          </label>
          <input
            type="text"
            id="voice"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('voice', { required: true })}
          />
          {errors.voice}
        </div>
        
        <div className="mb-4">
          <label htmlFor="video" className="block text-gray-700 font-bold mb-2">
            VIDEO
          </label>
          <input
            type="text"
            id="video"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('video', { required: true })}
          />
          {errors.video}
        </div>

        <div className="mb-4">
          <label htmlFor="sms" className="block text-gray-700 font-bold mb-2">
            SMS
          </label>
          <input
            type="text"
            id="sms"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('sms', { required: true })}
          />
          {errors.sms}
        </div>
        
        <div className="mb-4">
          <label htmlFor="vas" className="block text-gray-700 font-bold mb-2">
            VAS
          </label>
          <input
            type="text"
            id="vas"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('vas', { required: true })}
          />
          {errors.voice}
        </div>

      </form>
    </div>
  );
}

export default Upload_CUG_Bill



