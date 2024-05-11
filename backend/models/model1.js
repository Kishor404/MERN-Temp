const mongoose=require("mongoose")

const Schema=mongoose.Schema

const schema1=new Schema({
    N1:{
        type:String,
        required:true
    },
    N2:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model("Model1",schema1)