const {permutationAsync}=require('./async_math');
const {tlog}=require('../utils');

const testPermutation_0=(n,r)=>{
   let x=  permutationAsync(n,r)

  // tlog('x',x);
   
    x  .then(result=>tlog(`Permutation ${n}P${r}: ${result}\t`))
       .catch(error=>tlog(`Error Calculating ${n}P${r}: ${error.message}`));

    tlog(`calculating ${n}P${r}`);
}


const testPermutation = async(n,r)=>{

   try{
      let result = await permutationAsync(n,r);
      console.log(`${n}P${r} = ${result}\t`);
   }
   catch(error){
      console.error(`Error Calculating ${n}P${r}: ${error.message}`);
   }

}






testPermutation(7,3); //should take at least 7 seconds.
testPermutation(5,3);
testPermutation(5,-10); 