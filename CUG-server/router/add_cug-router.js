const express = require("express");
const router= express.Router();
const add_cugController = require("../controllers/add_cug-controller");
const add_cugSchema = require("../validators/add_cug-validator");
const validate = require("../middlewares/validate-middleware")

router.route("/create").post(validate(add_cugSchema), add_cugController.create);
router.route("/").get((req, res) => {
  res.send('Server is running!');
});
router.route("/all_data").get(add_cugController.getAllData);
module.exports = router;