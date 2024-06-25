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

    const calculateTotalAmount = (data) => {
      const filteredData = data.map((bill) => {
        const periodicCharge = parseFloat(bill['Periodic Charge']) || 0;
        const amountUsage = parseFloat(bill['Amount Usage']) || 0;
        const amountData = parseFloat(bill['Amount Data']) || 0;
        const voice = parseFloat(bill['Voice']) || 0;
        const video = parseFloat(bill['Video']) || 0;
        const sms = parseFloat(bill['SMS']) || 0;
        const vas = parseFloat(bill['VAS']) || 0;
        const totalAmount = periodicCharge + amountUsage + amountData + voice + video + sms + vas;
        return {
          'CUG NO': bill['CUG NO'],
          'Total Amount': totalAmount.toFixed(2),
          'Plan Type': bill['Plan Type'],
        };
      });
      setBills(filteredData);
    };

    const parseCSV = (file) => {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          calculateTotalAmount(result.data);
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
        calculateTotalAmount(parsedData);
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
    <div className="container mx-20 my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
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
              <th className="py-2">CUG NO</th>
              <th className="py-2">Total Amount</th>
              <th className="py-2">Plan Type</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{bill['CUG NO']}</td>
                <td className="border px-4 py-2">{bill['Total Amount']}</td>
                <td className="border px-4 py-2">{bill['Plan Type']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload_CUG_Bill;
