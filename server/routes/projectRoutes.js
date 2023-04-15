const { createProject,getAllProject,getParticularProject, deleteproject, contributeToProject, updateProject } = require("../controllers/projectController");
const router=require("express").Router();
const upload=require("../utils/multer")


router.post("/createproject",upload.single('image'),createProject);

router.get("/getallprojects",getAllProject)
router.get("/getproject/:id",getParticularProject);
router.delete("/deleteproject/:id",deleteproject)
router.post("/contribute/:id",contributeToProject)
router.post("/updateproject/:id",upload.single('image'),updateProject);



module.exports=router;