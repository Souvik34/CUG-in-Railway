const express=require("express");
const router= express.Router();
const authcontrollers=require("../controllers/auth-controller");
const signupSchema=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
const authmiddleware=require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.user_register);
router.route("/login").post( authcontrollers.user_login);
router.route("/dealer_login").post( authcontrollers.dealer_login);
router.route("/user").get( authmiddleware,authcontrollers.user);

module.exports=router;