const mongoose=require("mongoose")


const boardSchema=mongoose.Schema({
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Task'
        }
    ]
})

const boardModel=mongoose.model("Kanban",boardSchema)

module.exports=boardModel;