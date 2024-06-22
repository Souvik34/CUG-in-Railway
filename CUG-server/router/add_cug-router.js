const express = require("express");
const router= express.Router();
const add_cugController = require("../controllers/add_cug-controller");

router.route("/").post(add_cugController.create);
router.route("/").get((req, res) => {
  res.send('Server is running!');
});
router.route("/all_data").get(add_cugController.getAllData);
module.exports = router;