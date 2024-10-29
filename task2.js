const { default: axios } = require("axios");

async function awaitCall() {

    try{
        let books = await axios.get("https://library-api.postmanlabs.com/books");
        console.log(books);
    }catch(err){
       console.log(err);
    }
    
} 

awaitCall();