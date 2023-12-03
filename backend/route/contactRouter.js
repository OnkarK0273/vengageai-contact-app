const express = require("express")
const contactModal = require("../model/contact.model")


const contactRouter = express.Router()

// get req
contactRouter.get("/",async (req,res)=>{

    const serch = req.query
    console.log(serch.name)

    try{
        let contacts = await contactModal.find(serch)
        res.json(contacts)

    }catch(err){

        res.status(500).json({massage:err.message})

    }

})



// post req
contactRouter.post("/",async (req,res)=>{

    try{

        let newcontact = new contactModal(req.body)

        await newcontact.save()

        res.status(201).json({msg:"contact is added"})

    }catch(err){

        res.status(500).json({massage:err.message})

    }

})

module.exports = contactRouter




