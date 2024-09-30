const mongoose=require('mongoos');

mongoose.connect('mongodb://localhost:27017/lms-tool');



const db = mongoose.connection;

db.once('open',()=>{
    console.log("conncet to mongodb")

})