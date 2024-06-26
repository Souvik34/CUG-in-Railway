const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  cugNo: { type: String, required: true },
  periodicCharge: { type: Number, required: true },
  amountUsage: { type: Number, required: true },
  amountData: { type: Number, required: true },
  voice: { type: Number, required: true },
  video: { type: Number, required: true },
  sms: { type: Number, required: true },
  vas: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true }
});

module.exports = mongoose.model('Bill', billSchema);
