async function  iterateWithAsyncAwait(arr){
   for(let i=0;i<arr.length;i++){
      await new Promise((res)=>{
              setTimeout(res,1000)
        });

        console.log(arr[i]);
   }
}

iterateWithAsyncAwait([1,2,3,4,5]);