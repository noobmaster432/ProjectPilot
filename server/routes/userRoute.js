const router=require("express").Router();
const{test, getUser, deleteUser, updateUser}=require("../controllers/userController")
const upload=require("../utils/multer")
router.get("/test",test);
router.get("/getuser/:id",getUser);
router.put("/updateuser/:id",upload.single('image'),updateUser);
router.delete("/deleteuser/:id",deleteUser);

module.exports=router;

