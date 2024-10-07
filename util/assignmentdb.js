//conncet database from express//

const {MongoClient} = require('mongodb')    //client giVe all the functionalities and date
const client = new MongoClient('mongodb://localhost:27017/');    //create connection or path to the database
async function readAssignment(){

    //1.connect to databASE
    await client.connect();      //it is a async fuction  so we use await here
    //2.choose your database
    const database=client.db('lms-tool')
    //3.choose your collection
    const collection = database.collection ('assignments')
    //4.query the database
    //const result = await collection.findOne(); //this is also async fn so here also we use await 
    const result = await collection.find().toArray();    //return the table in array form
    await client.close();   //every time after client.connect we must close the client before return
        
    return result;   //data send to front end


}

async function createAssignment(){

    //1.connect to databASE
    await client.connect();      //it is a async fuction  so we use await here
    //2.choose your database
    const database=client.db('lms-tool')
    //3.choose your collection
    const collection = database.collection ('assignments')
    //4.query the database
    const result = await collection.insertOne({
        assignmentId:"0001",
        assignmentName:"inserted from createMethod",
    }); //this is also async fn so here also we use await 
    await client.close();   //every time after client.connect we must close the client before return
        
    return result;   //data send to front end


}

module.exports= {readAssignment,createAssignment}