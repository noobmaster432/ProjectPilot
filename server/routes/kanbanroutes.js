const { test, createTask } = require('../controllers/kanbanControllers');

const router=require('express').Router();




router.get("/test",test)
router.post("/createtask",createTask)

module.exports=router;