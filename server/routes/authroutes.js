const router=require("express").Router();
const{ registerUser, loginUser,  verifyOtp, resendOTP}=require("../controllers/authcontrollers")
const upload=require("../utils/multer")



router.post("/register",upload.single('image'),registerUser)
router.post("/login",loginUser);
router.post("/verifyotp",verifyOtp);
router.post("/resendotp",resendOTP);


module.exports=router; 