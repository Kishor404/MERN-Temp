const express = require("express")
const router=express.Router()


const {createm1,getm1,getm1s,patchm1,deletem1}=require("../controllers/controller1.js")

// CRED

// POST

router.post("/",createm1)

// GET

router.get("/",getm1)

router.get("/:id",getm1s)

// PATCH 

router.patch("/:id",patchm1)

// DELETE 

router.delete("/:id",deletem1)

module.exports=router