require("dotenv").config()

const express=require("express")
const app=express()
const mongoose=require("mongoose")
var cors = require('cors')

const route1 = require("./routes/route1.js")


const port=process.env.PORT
const uri=process.env.URI

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.method," --> ",req.path)
    next()
})

app.use("/api1",route1)

mongoose.connect(uri)
    .then(()=>{
        console.log("DB Connected Succesfully...")
        app.listen(port,()=>{
            console.log("Listening to port",port)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


