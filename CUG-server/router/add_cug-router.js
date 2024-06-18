const express = require("express");
const router= express.Router();
const addcugController=require("../controllers/add_cug-controller");

router.route("/").post(addcugController.create);