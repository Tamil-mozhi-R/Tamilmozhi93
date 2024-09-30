const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assignment= new Schema({
    assignmentId:{ type:String,required:true},
    assignmentName:{ type:String,required:true},
    assignmentDesc:{ type:String,required:true},
    assignmentEndDate:{ type:String,required:true},

})

const Assignment=mongoose.model('Assignment',assignment);
module.exports=Assignment;
