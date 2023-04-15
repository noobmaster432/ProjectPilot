const userDB=require("../models/userModal")
const cloudinary=require("../utils/cloudinary")
const asyncHandler=require("express-async-handler")
const test=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User API established"})
})

const getUser=asyncHandler(async(req,res)=>{
     const id=req.params.id; 
     const findUser=await userDB.findById({_id:id}).populate('projectsContributed').populate('projectsCreated')
     if(findUser){
        res.status(200).json({message:"User found",findUser})
     }
     else{
        res.status(404).json({message:"User not found"});
     }

})
const updateUser=asyncHandler(async(req,res)=>{
    const {bio,linkedIn,twitter}=req.body;
    const id=req.params.id;
    let uploadedFile;
    let imageUrl='';
    if (req.file) {

        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "image",
            folder: 'Project Pilot'
        })
        if(!uploadedFile){
            res.status(500)
            throw new Error("Error in uploading file")
        }
        else{
            imageUrl=uploadedFile.secure_url;
        }
        
    }
    const findUser=await userDB.findById({_id:id})
    if(findUser){
        const updateData={
            bio:bio===undefined?findUser.bio:bio,
            linkedIn:linkedIn===undefined?findUser.linkedIn:linkedIn,
            twitter:twitter===undefined?findUser.twitter:twitter,
            image:req.file==undefined?findUser.image:imageUrl
        }
        const updatedUser=await userDB.findByIdAndUpdate({_id:id},updateData,{new:true})
        if(updatedUser){
            res.status(200).json({message:"Successfully updated user",updatedUser})

        }
        else{
            res.status(500)
            throw new Error("Error in updating user");
        }
    }
    else{
        res.status(404)
        throw new Error("User not found");
    }
})
const deleteUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const userId=req.params.id;
    if(id!==userId){
        res.status(400)
        throw new Error("Cannot delete someone elses account")
    }
    else{
        const deletedUser=await userDB.findByIdAndDelete({_id:id});
        if(deletedUser){
            res.status(200).json({message:"Successfully deleted user"})

        }
        else{
            res.status(400)
            throw new Error("Error in deleting user");
        }
    }
})


module.exports={test,getUser,deleteUser,updateUser};