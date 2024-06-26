/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function Upload_New_CUG_Nos() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [headers, setHeaders] = useState([]);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      if (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel' || file.name.endsWith('.csv')) {
        Papa.parse(fileContent, {
          header: true,
          complete: (results) => {
            setHeaders(Object.keys(results.data[0] || {}));
            setFileData(results.data);
          },
        });
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
        const formattedHeaders = sheet[0];
        const formattedData = sheet.slice(1).map((row) => {
          const rowData = {};
          formattedHeaders.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        setHeaders(formattedHeaders);
        setFileData(formattedData);
      }
    };

    if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto my-20">
      <div className="w-full max-w-xl  px-36 py-6 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-[#2E2D93]">Upload NEW CUG Numbers</h1>
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
            <button type="submit" className="w-full py-2 px-4   bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
          </div>
        </form>
      </div>

      {fileData.length > 0 && (
        <div className="mt-10 w-full px-4 overflow-hidden">
          <h2 className="text-xl font-bold text-center text-[#2E2D93] mb-4">File Data</h2>
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fileData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {headers.map((header, colIndex) => (
                      <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload_New_CUG_Nos;
