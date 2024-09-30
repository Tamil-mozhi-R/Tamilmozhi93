var express = require('express');
const Assignment = require('../models/Assignment-model');
const router = express.Router();

router.get('/get',(req,res)=>{
    res.send("assignment is get method called")
})
router.get('/getAllAssignments',async (req,res)=>{
   const assignmentList =   await Assignment.find()
    console.log(assignmentList);

    res.status(201).json(assignmentList)
})

router.post('/create',(req,res)=>{
    newAssignment={
        assignmentId:"1",
        assignmentName:"test",
        assignmentDesc:"This is test Description",
        assignmentEndDate:"21/05/2024"
    }
    Assignment.create(newAssignment )        //create assignment from router

    res.send("post method")
})

module.exports=router;