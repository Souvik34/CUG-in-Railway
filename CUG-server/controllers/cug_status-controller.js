const Add_cug = require('../models/add_cug-model');
const Deactivated_cug = require('../models/cug_deactivate-model');

// Create a new Employee (for testing purposes)
exports.create = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all active CUG data
exports.getAllData = async (req, res) => {
  try {
    const allData = await Add_cug.find({ status: 'active' });
    res.json({ allData });
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Deactivate a CUG number
exports.deactivate = async (req, res) => {
  const { cugNo } = req.body;
  try {
    const cug = await Add_cug.findOne({ cugNo });
    if (cug) {
      const deactivatedCug = new Deactivated_cug(cug.toObject());
      await deactivatedCug.save();
      await Add_cug.deleteOne({ cugNo });
      res.json({ message: 'CUG No. deactivated successfully', deactivatedCug });
    } else {
      res.status(404).json({ message: 'CUG No. not found' });
    }
  } catch (error) {
    console.error('Error deactivating CUG No.:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all deactivated CUG data
exports.getAllDeactivatedData = async (req, res) => {
  try {
    const allData = await Deactivated_cug.find();
    res.json({ allData });
  } catch (error) {
    console.error('Error fetching deactivated employee data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
