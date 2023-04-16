const mongoose=require("mongoose")

const suggestionSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    suggestion:{
        type:String,
        required:true
    },
    name:{
        type:String,
    }
},
{timestamps:true}
)

module.exports=mongoose.model("Suggestion",suggestionSchema)
