const router=require("express").Router();
const { getAllProject } = require("../controllers/projectController");
const{test}=require("../controllers/userController")

router.get("/test",test);
router.get("/getallprojects",getAllProject)


module.exports=router;

