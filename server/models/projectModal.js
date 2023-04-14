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
       type:Object,
       required:true
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
        type:Date
    },
    licence:{
        type:String,
    },
    visiblity:{
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
    language:{
        type:[Object]
    },
    readMe:{

    }


},{
    timestamps:true
})


const Project=mongoose.model('Project',projectSchema)

module.exports=Project;