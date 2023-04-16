const taskDB = require("../models/taskModal")
const kanbanDB = require("../models/kanbanModal")
const projectDB = require("../models/projectModal")
const asyncHandler = require("express-async-handler")

const colorCode = ['#e64a19', '#1f88e5', '#683a68', '#02897b']
const test = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Kanban route working" })
})

const createTask = asyncHandler(async (req, res) => {
    const { projectId, userId, title, status, summary, tags } = req.body;
    const createdBy = await projectDB.findById({ _id: projectId })
    console.log(createdBy.createdBy[0].valueOf())
    if (userId !== createdBy.createdBy[0].valueOf()) {
        res.status(400)
        throw new Error("Cannot create a task not the project owner")
    }
    else {
        var colorcode = ''
        if (status.toLowerCase() == 'open') {
            colorcode = colorCode[0]
        }
        if (status.toLowerCase() == 'inprogress') {
            colorcode = colorCode[1]
        }
        if (status.toLowerCase() == 'testing') {
            colorcode = colorCode[2];
        }
        if (status.toLowerCase() == 'close') {
            colorcode = colorCode[3]
        }
        const newTask = new taskDB({
            title: title,
            status: status.toLowerCase(),
            summary: summary,
            tags: tags,
            color: colorcode,
            projectId: projectId,
            className: 'e-kanban'

        })
        const savedTask = await newTask.save();
        const project = await projectDB.findById({ _id: projectId })
        const updatedKanban = await kanbanDB.findByIdAndUpdate({ _id: project.kanban }, {
            $push: { tasks: savedTask._id }
        },{new:true})
        if (savedTask && updatedKanban) {

            res.status(200).json({ message: "Saved Task successfully", savedTask })
        }
        else {
            res.status(500)
            throw new Error("Failed to save task");
        }
    }
})

const editTask=asyncHandler(async(req,res)=>{
    const{userId,status,summary,}=req.body;
    const projectId=req.params.id;
    const createdBy = await projectDB.findById({ _id: projectId })
    console.log(createdBy.createdBy[0].valueOf())
    if (userId !== createdBy.createdBy[0].valueOf()) {
        res.status(400)
        throw new Error("Cannot create a task not the project owner")
    }
    else{
        const updateData={};
        if(status){
            updateData.status=status;
        }
        if(summary){
            updateData.summary=summary;
        }
        const updatedTask=await taskDB.findByIdAndUpdate({_id:id},{
            updateData
        },{
            new:true
        })
        if(updatedTask){
            res.status(200).json({message:"Successfully updated task",updatedTask})
        }
        else{
            res.status(500)
            throw new Error("Error in updating task");
        }

    }

})
const deleteTask=asyncHandler(async(req,res)=>{
    const{userId}=req.body;
    const projectId=req.params.id;
    const createdBy = await projectDB.findById({ _id: projectId })
    if (userId !== createdBy.createdBy[0].valueOf()) {
        res.status(400)
        throw new Error("Cannot delete a task not the project owner")
    }
    else{
        const deletedTask=await taskDB.findByIdAndDelete({_id:projectId})
        const updatedKanban=await kanbanDB.findByIdAndUpdate({_id:createdBy.kanban},{
            $pop:{tasks:deletedTask._id}
        },{new:true})
        if(deletedTask&&updatedKanban){
            res.status(200).json({message:"Successfully deleted the project"})
        }
        else{
            res.status(500)
            throw new Error("Error in deleting the task");
        }

    }

})

const getAllTask=asyncHandler(async(req,res)=>{
    
})

module.exports = { test, createTask ,editTask,deleteTask};