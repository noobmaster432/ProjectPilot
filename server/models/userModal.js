const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    
    projectsCreated: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
        
    ],
    projectsContributed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    bio: {
        type:String,
        default:''
        
    },
    gitHub:{
        type:String,
        default:''
    },
    linkedIn: {
        type:String,
        default:''
    },
    twitter: {
        type:String,
        default:''
    },
    image: {
        type:Object
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const userModel=mongoose.model("User",userSchema);
module.exports=userModel;