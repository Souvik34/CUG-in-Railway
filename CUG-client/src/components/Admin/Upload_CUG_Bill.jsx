/* eslint-disable no-unused-vars */


import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Upload_CUG_Bill() {
  const { register, handleSubmit } = useForm();
  const [bills, setBills] = useState([]);
  const [totalAmountSum, setTotalAmountSum] = useState(0);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileInfo, setFileInfo] = useState({ month: '', year: '' });
  const [loading, setLoading] = useState(false);

  const safeToFixed = (num, decimals) => {
    return (typeof num === 'number' ? num : 0).toFixed(decimals);
  };

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://127.0.0.2:4000/api/bills');
        const data = await response.json();
        setBills(data);
      } catch (error) {
        console.error('Error fetching the bills:', error);
      }
    };

    fetchBills();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.2:4000/api/bills/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setBills(result.bills);
        setFileUploaded(true);
        setTotalAmountSum(result.totalAmountSum);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
<<<<<<< HEAD
    const fileType = file.type;

    // Extract month and year from the file name
    const fileName = file.name;
    const regex = /(\w+)-(\d{4})/; // Adjust this regex based on your file name format
    const match = fileName.match(regex);
    if (match) {
      const [_, month, year] = match;
      setFileInfo({ month, year });

      // Validate the file date
      const fileDate = new Date(`${month} 1, ${year}`);
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

      if (fileDate < sixMonthsAgo) {
        alert('Please upload a bill that is not older than six months.');
        event.target.value = null;
        return;
      }
    } else {
      setFileInfo({ month: 'Unknown', year: 'Unknown' });
      alert('Invalid file name format. Please upload a valid bill file.');
      event.target.value = null;
      return;
    }

    const calculateTotalAmount = (data) => {
      let totalSum = 0;
      const dataWithTotalAmount = data.map(bill => {
        const periodicCharge = parseFloat(bill['Periodic Charge']) || 0;
        const amountUsage = parseFloat(bill['Amount Usage']) || 0;
        const amountData = parseFloat(bill['Amount Data']) || 0;
        const voice = parseFloat(bill['Voice']) || 0;
        const video = parseFloat(bill['Video']) || 0;
        const sms = parseFloat(bill['SMS']) || 0;
        const vas = parseFloat(bill['VAS']) || 0;
        const totalAmount = periodicCharge + amountUsage + amountData + voice + video + sms + vas;
        totalSum += totalAmount;
        return { ...bill, 'Total Amount': totalAmount };
      });
      setTotalAmountSum(totalSum);
      return dataWithTotalAmount;
    };

    const parseCSV = (file) => {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const dataWithTotalAmount = calculateTotalAmount(result.data);
          setBills(dataWithTotalAmount);
          setFileUploaded(true);
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
        const dataWithTotalAmount = calculateTotalAmount(parsedData);
        setBills(dataWithTotalAmount);
        setFileUploaded(true);
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
=======
    if (file) {
      const fileName = file.name;
      const regex = /(\w+)-(\d{4})/;
      const match = fileName.match(regex);
      if (match) {
        const [, month, year] = match;
        setFileInfo({ month, year });
      }
>>>>>>> 10dc4aced27add53f2d2186a5fe1188e0495469d
    }
  };

  return (
    <div className="container mx-20 my-20 flex flex-col items-center">
      <div className="text-4xl  text-[#2E2D93] font-bold mb-4">
        Upload Your Bills
      </div>
      <p className="text-lg mb-4">
        Please upload your CSV or Excel file to view your bills.
      </p>
      {loading && (
        <div className="mb-4 text-center text-blue-700">
          Submitting file, please wait...
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-4 w-full max-w-md p-5 space-y-6 bg-white shadow-md rounded-lg">  
          
          <input
            type="file"
            id="file_upload"
            {...register('file', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleFileUpload}
            aria-label="Upload CSV or Excel file"
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

      {bills.length > 0 && (
        <div className="mt-8 w-full">
          <div className="text-lg font-bold mb-4">
            {fileUploaded && (
              <>
                <div>Month: {fileInfo.month}</div>
                <div>Year: {fileInfo.year}</div>
                <div>Sum of Total Amount Charges: {safeToFixed(totalAmountSum, 2)}</div>
              </>
            )}
          </div>
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
                <th className="py-2">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{bill.cugNo}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.periodicCharge, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.amountUsage, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.amountData, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.voice, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.video, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.sms, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.vas, 2)}</td>
                  <td className="border px-4 py-2">{safeToFixed(bill.totalAmount, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Upload_CUG_Bill;
