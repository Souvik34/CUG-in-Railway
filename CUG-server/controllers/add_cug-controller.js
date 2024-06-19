const Add_cug = require("../models/add_cug-model");
    const create = async (req, res) => {
        try {
          console.log(req.body);
          const response = req.body;
          await Add_cug.create(response);
          return res.status(201).json({ msg: "Add_cug created successfully" });
        } catch (error) {
          console.error(error);
          res.status(400).json({ message: "Failed to create Add_cug" });
        }
      }; 
      
      module.exports = {create};