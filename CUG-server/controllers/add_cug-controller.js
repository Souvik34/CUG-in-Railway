const Add_cug = require("../models/add_cug-model");
const create = async (req, res) => {
  try {
    console.log(req.body);
    const {
      cugNo,
      empNo,
      name,
      designation,
      division,
      department,
      billUnit,
      allocation,
      plan,
    } = req.body;
    const employeerExist = await Add_cug.findOne({cugNo,empNo});
    if (employeerExistExist) {
      return res.status(400).json({ message: "Employeer and Cug no  already exist" });
    }
    const userCreated = await Add_cug.create({
      cugNo,
      empNo,
      name,
      designation,
      division,
      department,
      billUnit,
      allocation,
      plan,
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
