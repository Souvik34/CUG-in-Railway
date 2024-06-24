import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function Upload_CUG_Bill() {
  const { handleSubmit } = useForm();
  const [bills, setBills] = useState([]);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;

    const filterData = (data) => {
      const filteredData = data.filter(
        (bill) => parseFloat(bill['Periodic Charge']) > 74.61 &&
                  parseFloat(bill['Periodic Charge']) > 59.05 &&
                  parseFloat(bill['Periodic Charge']) > 39.9
      );
      setBills(filteredData);
    };

    const parseCSV = (file) => {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          filterData(result.data);
        },
      });
    };

    const parseExcel = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });
        const headers = worksheet[0].map((header) => header.trim());
        const rows = worksheet.slice(1);
        const parsedData = rows.map((row) =>
          row.reduce((acc, cell, index) => {
            acc[headers[index]] = cell;
            return acc;
          }, {})
        );
        filterData(parsedData);
      };
      reader.readAsArrayBuffer(file);
    };

    if (fileType === 'text/csv') {
      parseCSV(file);
    } else if (
      fileType ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      fileType === 'application/vnd.ms-excel'
    ) {
      parseExcel(file);
    } else {
      alert('Please upload a valid CSV or Excel file.');
      event.target.value = null;
    }
  };

  return (
    <div className="container mx-20 my-20 flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-4 text-center">
          <label
            htmlFor="file_upload"
            className="block text-gray-700 font-bold mb-2"
          >
            Upload CSV/Excel
          </label>
          <input
            type="file"
            id="file_upload"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleFileUpload}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-8 w-full">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">CUG NO</th>
              <th className="py-2">Periodic Charge</th>
              <th className="py-2">Amount Usage</th>
              <th className="py-2">Amount Data</th>
              <th className="py-2">Voice</th>
              <th className="py-2">Video</th>
              <th className="py-2">SMS</th>
              <th className="py-2">VAS</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{bill['CUG NO']}</td>
                <td className="border px-4 py-2">{bill['Periodic Charge']}</td>
                <td className="border px-4 py-2">{bill['Amount Usage']}</td>
                <td className="border px-4 py-2">{bill['Amount Data']}</td>
                <td className="border px-4 py-2">{bill['Voice']}</td>
                <td className="border px-4 py-2">{bill['Video']}</td>
                <td className="border px-4 py-2">{bill['SMS']}</td>
                <td className="border px-4 py-2">{bill['VAS']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload_CUG_Bill;
