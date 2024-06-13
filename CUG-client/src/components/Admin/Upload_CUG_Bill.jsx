import React from 'react';
import { useForm } from 'react-hook-form';

function Upload_CUG_Bill() {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
    // Add file handling logic here (e.g., parsing CSV/Excel)
  };

  return (
    <div className="container mx-20 my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="file_upload" className="block text-gray-700 font-bold mb-2">
            Upload CSV/Excel
          </label>
          <input
            type="file"
            id="file_upload"
            className="shadow appearance-none border rounded w-150 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleFileUpload}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">PF No</th>
              <th className="py-2">Plan</th>
              <th className="py-2">Amount Charged</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">123456</td>
              <td className="border px-4 py-2">Basic Plan</td>
              <td className="border px-4 py-2">100</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">789012</td>
              <td className="border px-4 py-2">Premium Plan</td>
              <td className="border px-4 py-2">200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload_CUG_Bill;
