const express=require("express");
const router= express.Router();
const authcontrollers=require("../controllers/auth-controller");
const signupSchema=require("../validators/auth-validator");
const dealerValidationSchema=require("../validators/dealer-validator");
// const loginSchema= require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
const authmiddleware=require("../middlewares/auth-middleware");

// router.get("/",(req,res)=>{
//     res.status(200).send("this is new home page");
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/dealer_register").post(validate(dealerValidationSchema),authcontrollers.dealer_register);
router.route("/login").post( authcontrollers.login);
router.route("/dealer_login").post( authcontrollers.dealer_login);
router.route("/user").get( authmiddleware,authcontrollers.user);
module.exports=router;