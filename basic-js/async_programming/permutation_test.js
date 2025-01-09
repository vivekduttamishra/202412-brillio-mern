const {factorial,permutation}=require('./math_async.js');


function tlog(...message){
    console.log(new Date().toLocaleTimeString(),...message);
}


function testPermutation(n,r){
 
    permutation(n,r,(error,result)=>{
        if(error)
            tlog(`Error Calculating ${n} P ${r}: ${error}`);
        else
            tlog(`${n} P ${r} : ${result}`);
    })

    tlog(`calculating ${n} P ${r}...`)
}


testPermutation(7,3);
testPermutation(5,3);
testPermutation(3,5);
