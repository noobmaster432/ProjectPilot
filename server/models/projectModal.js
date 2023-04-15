const mongoose=require("mongoose")


const projectSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    gitHubRepoLink:{
        type:String,
        required:true
    },
    displayImage:{
       type:String,
       required:true
    },
    bio:{
        type:String,
        required:true
    },
    createdBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    kanban:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Kanban'
    },
    hostedLink:{
        type:String
    },
    totalActivity:{
        type:Number
    },

    repoCreatedAt:{
        type:String
    },
    license:{
        type:Object,
    },
    visibility:{
        type:String
    },
    forks:{
        type:Number
    },
    issues:{
        type:Number
    },
    pullRequests:{
        type:Number 
    },
    contributors:{
        type:Number
    },
    stars:{
        type:Number
    },
    language:{
        type:[Object]
    },
    tags:{
        type:[String]
    },
    isVerified:{
        type:String,
        default:"false"
    }


},{
    timestamps:true
})


const Project=mongoose.model('Project',projectSchema)

module.exports=Project;