const Model1=require("../models/model1.js")

const mongoose=require("mongoose")

// CRED

// PATCH

const createm1=async (req,res)=>{
    const {N1,N2}=req.body
    try{
        const m1=await Model1.create({N1,N2})
        res.status(200).json(m1)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// GET

const getm1=async (req,res)=>{
    const data=await Model1.find({})
    res.status(200).json(data)
}
const getm1s=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await Model1.findById(id)

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
    
}

// PATCH

const patchm1=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await Model1.findOneAndUpdate({_id:id},{...req.body})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
}

// DELETE

const deletem1=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await Model1.findOneAndDelete({_id:id})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)

}

module.exports={createm1,getm1,getm1s,patchm1,deletem1}