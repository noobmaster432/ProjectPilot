const userDB=require("../models/userModal")
const asyncHandler=require("express-async-handler")
const test=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User API established"})
})


module.exports={test};