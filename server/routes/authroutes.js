const router=require("express").Router();
const{ registerUser, loginUser,  verifyOtp, resendOTP}=require("../controllers/authcontrollers")




router.post("/register",registerUser)
router.post("/login",loginUser);
router.post("/verifyotp",verifyOtp);
router.post("/resendotp",resendOTP);


module.exports=router; 