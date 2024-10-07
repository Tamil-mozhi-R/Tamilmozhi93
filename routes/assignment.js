var express = require('express');
const Assignment = require('../models/Assignment-model');
const { readAssignment, createAssignment } = require('../util/assignmentdb');
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
 router.get('/getresults',async(req,res)=>{
    const assignmentId=req.query.assignmentId
    const assignmentDueDate=req.query.assignmentEndDate
    console.log("Assignment Id from get request",assignmentId,assignmentDueDate)
    let result;
    if(assignmentId){
        result= await Assignment.find({assignmentId})
    }else{
        result=await Assignment.find();
    }
    res.json(result)
 })

 router.get('/:assignmentId',async(req,res)=>{
    const abc=req.params.assignmentId
    console.log(abc)
    const result = await Assignment.find({assignmentId:abc})
    res.json(result)
 })

 router.post('/createAssignment',async(req,res)=>{
    const result= await createAssignment();
    res.send("created successfully")
 })
module.exports=router;