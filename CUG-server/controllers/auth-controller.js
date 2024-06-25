const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is the home page using controller");
  } catch (error) {
    console.log(error);
  }
};

// user-register function
const user_register = async (req, res) => {
  try {
    console.log("register:", req.body);
    const { username, employeeid, department, phone, password } = req.body;

    const userExist = await User.findOne({ employeeid });
    if (userExist) {
      return res.status(400).json({ message: "Employee id already exists" });
    }

    const userCreated = await User.create({
      username,
      employeeid,
      department,
      phone,
      password,
    });

    res.status(201).json({ msg: "Registration successful", userId: userCreated._id.toString() });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// user Login
const user_login = async (req, res) => {
  try {
    console.log(req.body);
    const { employeeid, password } = req.body;
    const userExist = await User.findOne({ employeeid });
    if (!userExist) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await userExist.comparePassword(password);

    if (isPasswordCorrect) {
      res.status(200).json({ message: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
    } else {
      res.status(401).json({ message: "Invalid employee id or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// dealer Login
const dealer_login = async (req, res) => {
  try {
    console.log(req.body);
    const { employeeid, password } = req.body;
    const userExist = await User.findOne({ employeeid });
    if (!userExist) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await userExist.comparePassword(password);

    if (isPasswordCorrect) {
      res.status(200).json({ message: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
    } else {
      res.status(401).json({ message: "Invalid employee id or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// For sending user data 
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log("data from auth controller user", userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { home, user_register, user_login,dealer_login, user };
