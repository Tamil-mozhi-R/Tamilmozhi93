var express = require('express');
const router = express.Router();
router.get('/get',(req,res)=>{
    res.send("assignment is get method called")
})
router.get('/getAllAssignments',(req,res)=>{
    res.send("this is my assignment method")
})

module.exports=router;