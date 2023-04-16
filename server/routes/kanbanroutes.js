const { test, createTask, editTask, deleteTask } = require('../controllers/kanbanControllers');

const router=require('express').Router();




router.get("/test",test)
router.post("/createtask",createTask)
router.put("/edittask",editTask)
router.delete("/deletetask",deleteTask);
module.exports=router;