import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Upload_New_CUG_Nos() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    if (!selectedFile) {
      alert('Please upload a file');
      return;
    }
    console.log(data);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setValue('file', file); 
    console.log('File uploaded:', file);
  };

  return (
    <div className='flex justify-center items-start min-h-screen mt-20'>
      <div className="w-full max-w-md p-5 space-y-6 bg-white shadow-md rounded-lg ml-60">
        <h1 className="text-2xl font-bold text-center text-[#2E2D93]">Upload NEW CUG Numbers</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="file_upload" className="block text-sm font-medium text-gray-700">Upload CSV/Excel</label>
            <input
              type="file"
              id="file_upload"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              accept=".csv, .csvs, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              {...register('file', { required: true })}
              onChange={handleFileUpload}
              aria-label="Upload CSV or Excel file"
            />
            {errors.file && <p className="text-red-500 text-xs italic">File is required.</p>}
            {selectedFile && <p className="mt-2 text-gray-600">{selectedFile.name}</p>}
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-[#2E2D93] hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload_New_CUG_Nos;
