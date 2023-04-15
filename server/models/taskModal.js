const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:{
        type:String
    },
    status:{
        type:String
    },
    summary:{
        type:String
    },
    tags:{
     type:[String]   
    },
    color:{
        type:String
    },
    className:{
        type:String,
    },
    projectId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Project"
        }
    ]

})
const taskModal=mongoose.model("Task",taskSchema);
module.exports=taskModal;