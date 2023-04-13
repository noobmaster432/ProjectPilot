const { createProject } = require("../controllers/projectController");
const router=require("express").Router();
const upload=require("../utils/multer")


router.post("/createproject",upload.single('image'),createProject);




module.exports=router;