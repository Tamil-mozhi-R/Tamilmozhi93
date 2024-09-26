function demoFunction(abc){
    setTimeout(()=>{
        console.log("Demo Function started")      //callback function happened
        abc();
    },5000)

}

function demoFunctionEnd(){
    console.log("Demo Function Ended")
}

//demoFunction(demoFunctionEnd); //      //function passed as a argument to another function
         //demofunctionend first executed and then demofunction run due to settimeout
 
function firstFunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("First Function")
        resolve();
        
},2000)
})
}

function secondFunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Second Function")
            try{
                throw new Error("this is an artificial error")
            }catch(e){
                resolve(e);
            }
            
        },2000)
    })

}
    
    

function thirdFunction(){
     return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log("Third Function")
        resolve();
    },2000)
})
}

//firstFunction()
//.then(()=>{secondFunction()})
  //  .then(()=>{thirdFunction()})
  //  .catch((error)=>console.log("abc:" ,error));



  

  async function first(){
    setTimeout(()=>{
        console.log("first Function")

    },2000)
}

async function second(){
    setTimeout(()=>{
        console.log("second Function")

    },2000)
}

async function third(){
    setTimeout(()=>{
        console.log("Third Function")

    },2000)
}
    
    

async function fourth(){
    setTimeout(()=>{
        console.log("fourth Function")

    },2000)
}


async function run(){
    await first();
    await second();
    await third();
    await fourth();

}

run();




    
