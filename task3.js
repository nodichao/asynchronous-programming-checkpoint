const { default: axios } = require("axios")

//handling errors with async/await
async function awaitCall(){
    try{
          let books = await axios.get('https://library-api.postmanlabs.com/books');
          console.log(books)
    }catch(err){
             console.log("il y a une erreur, la voici :"+err);
    }
}


//chaining with async/await


async function toChain1(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res();
             console.log("there is fist call");
        },1000);
    })  
}

async function toChain2(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res();
             console.log("there is second call");
        },1000);
    })  
}

async function toChain3(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res();
             console.log("there is third call");
        },1000);
    })  
}
async function chainedAsyncFunctions() {
    await toChain1();
    await toChain2();
    await toChain3();
}

chainedAsyncFunctions()