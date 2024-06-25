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


/// Delete a CUG number from the deactivated list
exports.deleteDeactivated = async (req, res) => {
  const { cugNo } = req.body;
  try {
    const deactivatedCug = await Deactivated_cug.findOne({ cugNo });
    if (deactivatedCug) {
      // Remove the CUG from the deactivated collection
      await Deactivated_cug.deleteOne({ cugNo });
      res.json({ message: 'CUG No. deleted from deactivated list successfully' });
    } else {
      res.status(404).json({ message: 'CUG No. not found in deactivated list' });
    }
  } catch (error) {
    console.error('Error deleting CUG No.:', error);
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


//...

// controller.js
exports.reactivate = async (req, res) => {
  const { cugNo } = req.body;
  try {
    const deactivatedCug = await Deactivated_cug.findOne({ cugNo });
    if (!deactivatedCug) {
      return res.status(404).json({ message: 'CUG No. not found in deactivated list' });
    }

    const session = await mongoose.startSession();
    try {
      await session.withTransaction(async () => {
        const reactivatedCug = new Add_cug(deactivatedCug.toObject());
        await reactivatedCug.save({ session });
        console.log(`Reactivated CUG No. ${cugNo} and saving to Add_cug collection`);
        await Deactivated_cug.deleteOne({ cugNo }, { session });
        console.log(`Deleted CUG No. ${cugNo} from Deactivated_cug collection`);
      });
      res.json({ message: 'CUG No. reactivated successfully' });
    } catch (error) {
      console.error('Error reactivating CUG No.:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      await session.endSession();
    }
  } catch (error) {
    console.error('Error reactivating CUG No.:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};