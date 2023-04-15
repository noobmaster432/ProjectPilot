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
        
    },
    createdBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
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
        type:[Object]
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