const express = require("express");
const router= express.Router();
const add_cugController = require("../controllers/add_cug-controller");

router.route("/").post(add_cugController.create);
// router.route("/").get(add_cugController.getAll);
// router.route("/:id").get(add_cugController.getById);

// router.route("/:id").delete(add_cugController.delete);
module.exports = router;