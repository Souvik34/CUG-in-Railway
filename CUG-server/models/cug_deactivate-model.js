const { Schema, model } = require("mongoose");

const deactivated_cugSchema = new Schema({
  cugNo: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: 'Invalid phone number. Please enter a 10-digit phone number.'
    }
  },
  empNo: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
 
  designation: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  billUnit: {
    type: String,
    required: true
  },
  allocation: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
});

const Deactivated_cug = model("Deactivated_cug", deactivated_cugSchema);

module.exports = Deactivated_cug;
