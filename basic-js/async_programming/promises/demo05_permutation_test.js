const {permutationAsync}=require('./async_math');
const {tlog}=require('../utils');

const testPermutation=(n,r)=>{
   let x=  permutationAsync(n,r)

  // tlog('x',x);
   
    x  .then(result=>tlog(`Permutation ${n}P${r}: ${result}\t`))
       .catch(error=>tlog(`Error Calculating ${n}P${r}: ${error.message}`));

    tlog(`calculating ${n}P${r}`);
}

testPermutation(7,3); //should take at least 7 seconds.
testPermutation(5,3);
testPermutation(5,-10); 