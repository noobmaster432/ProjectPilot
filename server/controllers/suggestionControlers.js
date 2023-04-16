const User=require("../models/userModal")
const Project=require("../models/projectModal")
const Suggestion=require("../models/suggestionModal")

const addSuggestion=async(req,res)=>{
    const {suggestion,projectId,userId}=req.body
    console.log(req.body);
    const user=await User.findById(userId);
    const project=await Project.findById(projectId);
    try{
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        if(!project){
            return res.status(404).json({
                message:"Project not found"
            })
        }
        const newSuggestion=new Suggestion({
            suggestion,
            user,
            project,
            name:user.name
        })
        await newSuggestion.save()
        project.suggestions.push(newSuggestion)
        await project.save()
        console.log(newSuggestion);
        res.status(200).json({
            message:"Suggestion added successfully"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

const getSuggestions=async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id)
        const project = await Project.findById(id).populate('suggestions');
        console.log(project)
        if (!project) {
          return res.status(404).json('Project not found');
        }
        console.log(project.suggestions);
        res.status(200).json(project.suggestions);
      } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
      }
}

const updateSuggestions=async(req,res)=>{
    const {id}=req.params
    const {suggestion}=req.body
    try{
        const updatedSuggestion=await Suggestion.findByIdAndUpdate(id,{
            suggestion
        },{new:true})
        res.status(200).json({
            message:"Suggestion updated successfully",
            updatedSuggestion
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

const deleteSuggestion=async(req,res)=>{
    const {id}=req.params
    try{
        const deletedSuggestion=await Suggestion.findByIdAndDelete(id)
        res.status(200).json({
            message:"Suggestion deleted successfully",
            deletedSuggestion
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={
    addSuggestion,
    getSuggestions,
    updateSuggestions,
    deleteSuggestion
}
