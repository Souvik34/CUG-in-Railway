const Add_cug = require("../models/add_cug-model");
const create = async (req, res) => {
  try {
    console.log(req.body);
    const {
      cugNo,
      empNo,
      firstName,
      lastName,
      designation,
      division,
      department,
      billUnit,
      allocation,
      operator,
      plan,
    } = req.body;
    const cugExist = await Add_cug.findOne({cugNo});
    if (cugExist) {
      return res.status(400).json({ message: "CUG No.  already exist" });
    }
    const employeerExist = await Add_cug.findOne({empNo});
    if (employeerExist) {
      return res.status(400).json({ message: "Employee No.  already exist" });
    }
    const userCreated = await Add_cug.create({
      cugNo,
      empNo,
      firstName,
      lastName,
      designation,
      division,
      department,
      billUnit,
      allocation,
      operator,
      plan,
      createdAt: new Date(),
    });
    return res.status(201).json({ msg: "Add_cug created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create Add_cug" });
  }
};

const getAllData = async (req, res) => {
  try {
    const allData = await Add_cug.find();
    if (!allData) {
      res.status(404).json({ message: "No data found" });
    }
    res.status(200).json({ allData });
  } catch (error) {
    console.log(error);
  }
};


module.exports = { create, getAllData };
