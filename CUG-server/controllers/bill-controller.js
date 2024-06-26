// const multer = require('multer');
// const Papa = require('papaparse');
// const XLSX = require('xlsx');
// const Bill = require('../models/bill');

// // Configure multer
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const uploadBills = async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
//     const fileType = file.mimetype;
//     const fileName = file.originalname;
//     const regex = /(\w+)-(\d{4})/;
//     const match = fileName.match(regex);
//     let month = 'Unknown';
//     let year = 'Unknown';

//     if (match) {
//       [, month, year] = match;
//     }

//     const calculateTotalAmount = (data) => {
//       let totalSum = 0;
//       const dataWithTotalAmount = data.map((bill) => {
//         const periodicCharge = parseFloat(bill['Periodic Charge']) || 0;
//         const amountUsage = parseFloat(bill['Amount Usage']) || 0;
//         const amountData = parseFloat(bill['Amount Data']) || 0;
//         const voice = parseFloat(bill['Voice']) || 0;
//         const video = parseFloat(bill['Video']) || 0;
//         const sms = parseFloat(bill['SMS']) || 0;
//         const vas = parseFloat(bill['VAS']) || 0;
//         const totalAmount = periodicCharge + amountUsage + amountData + voice + video + sms + vas;
//         totalSum += totalAmount;
//         return { ...bill, 'Total Amount': totalAmount };
//       });
//       return dataWithTotalAmount;
//     };

//     const parseCSV = (fileBuffer) => {
//       return new Promise((resolve, reject) => {
//         Papa.parse(fileBuffer.toString('utf8'), {
//           header: true,
//           complete: (result) => {
//             const dataWithTotalAmount = calculateTotalAmount(result.data);
//             resolve(dataWithTotalAmount);
//           },
//           error: (error) => reject(error),
//         });
//       });
//     };

//     const parseExcel = (fileBuffer) => {
//       const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
//         header: 1,
//       });
//       const headers = worksheet[0].map((header) => header.trim());
//       const rows = worksheet.slice(1);
//       const parsedData = rows.map((row) =>
//         row.reduce((acc, cell, index) => {
//           acc[headers[index]] = cell;
//           return acc;
//         }, {})
//       );
//       const dataWithTotalAmount = calculateTotalAmount(parsedData);
//       return dataWithTotalAmount;
//     };

//     let parsedData = [];

//     if (fileType === 'text/csv') {
//       parsedData = await parseCSV(req.file.buffer);
//     } else if (
//       fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
//       fileType === 'application/vnd.ms-excel'
//     ) {
//       parsedData = parseExcel(req.file.buffer);
//     } else {
//       return res.status(400).json({ message: 'Please upload a valid CSV or Excel file.' });
//     }

//     const validBills = [];
//     const invalidBills = [];

//     parsedData.forEach((bill) => {
//       const cugNo = bill['CUG NO'];
//       if (cugNo) {
//         validBills.push({
//           cugNo,
//           periodicCharge: bill['Periodic Charge'] !== undefined ? bill['Periodic Charge'] : 0,
//           amountUsage: bill['Amount Usage'] !== undefined ? bill['Amount Usage'] : 0,
//           amountData: bill['Amount Data'] !== undefined ? bill['Amount Data'] : 0,
//           voice: bill['Voice'] !== undefined ? bill['Voice'] : 0,
//           video: bill['Video'] !== undefined ? bill['Video'] : 0,
//           sms: bill['SMS'] !== undefined ? bill['SMS'] : 0,
//           vas: bill['VAS'] !== undefined ? bill['VAS'] : 0,
//           totalAmount: bill['Total Amount'],
//           month,
//           year,
//         });
//       } else {
//         invalidBills.push(bill);
//       }
//     });

//     if (invalidBills.length > 0) {
//       console.warn('The following bills were missing CUG NO and were skipped:', invalidBills);
//     }

//     const savedBills = await Promise.all(validBills.map((bill) => new Bill(bill).save()));

//     res.json({ message: 'Bills uploaded and stored successfully', bills: savedBills });
//   } catch (error) {
//     console.error('Error uploading and storing bills:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// module.exports = { upload, uploadBills };






const Papa = require('papaparse');
const XLSX = require('xlsx');
const Bill = require('../models/bill');

// Configure multer
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadBills = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const fileType = file.mimetype;
    const fileName = file.originalname;
    const regex = /(\w+)-(\d{4})/;
    const match = fileName.match(regex);
    let month = 'Unknown';
    let year = 'Unknown';

    if (match) {
      [, month, year] = match;
    }

    const calculateTotalAmount = (data) => {
      let totalSum = 0;
      const dataWithTotalAmount = data.map((bill) => {
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
      return dataWithTotalAmount;
    };

    const parseCSV = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        Papa.parse(fileBuffer.toString('utf8'), {
          header: true,
          complete: (result) => {
            const dataWithTotalAmount = calculateTotalAmount(result.data);
            resolve(dataWithTotalAmount);
          },
          error: (error) => reject(error),
        });
      });
    };

    const parseExcel = (fileBuffer) => {
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
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
      return dataWithTotalAmount;
    };

    let parsedData = [];

    if (fileType === 'text/csv') {
      parsedData = await parseCSV(req.file.buffer);
    } else if (
      fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      fileType === 'application/vnd.ms-excel'
    ) {
      parsedData = parseExcel(req.file.buffer);
    } else {
      return res.status(400).json({ message: 'Please upload a valid CSV or Excel file.' });
    }

    const validBills = [];
    const invalidBills = [];

    parsedData.forEach((bill) => {
      const cugNo = bill['CUG NO'];
      if (cugNo) {
        validBills.push({
          cugNo,
          periodicCharge: bill['Periodic Charge'] !== undefined ? bill['Periodic Charge'] : 0,
          amountUsage: bill['Amount Usage'] !== undefined ? bill['Amount Usage'] : 0,
          amountData: bill['Amount Data'] !== undefined ? bill['Amount Data'] : 0,
          voice: bill['Voice'] !== undefined ? bill['Voice'] : 0,
          video: bill['Video'] !== undefined ? bill['Video'] : 0,
          sms: bill['SMS'] !== undefined ? bill['SMS'] : 0,
          vas: bill['VAS'] !== undefined ? bill['VAS'] : 0,
          totalAmount: bill['Total Amount'],
          month,
          year,
        });
      } else {
        invalidBills.push(bill);
      }
    });

    if (invalidBills.length > 0) {
      console.warn('The following bills were missing CUG NO and were skipped:', invalidBills);
    }

    const savedBills = await Promise.all(validBills.map((bill) => new Bill(bill).save()));

    res.json({ message: 'Bills uploaded and stored successfully', bills: savedBills });
  } catch (error) {
    console.error('Error uploading and storing bills:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    console.error('Error fetching bills:', error);
    res.status(500).json({ message: 'Error fetching bills' });
  }
};

module.exports = { upload, uploadBills, getBills };
