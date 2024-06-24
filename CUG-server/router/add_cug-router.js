const express = require("express");
const router= express.Router();
const add_cugController = require("../controllers/add_cug-controller");
const add_cugSchema = require("../validators/add_cug-validator");
const validate = require("../middlewares/validate-middleware")


router.route("/").post(validate(add_cugSchema), add_cugController.create);
router.route("/all_data").get(add_cugController.getAllData);
router.route("/plans_and_departments").get(add_cugController.getPlansAndDepartments);

// New routes for draft functionality
router.route("/save_draft").post(add_cugController.saveDraft);
router.route("/get_draft/:draftId").get(add_cugController.getDraft);
module.exports = router;