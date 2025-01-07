const {findPrimesSync} = require('./primes.js');


function printFindPrimesResult(min,max){
    
    console.log(`Finding Primes in rangd ${min}-${max}`)
    let primes= findPrimesSync(min,max );
    console.log(`Total Primes found : ${primes.length}`)

}

printFindPrimesResult(2,20000);

printFindPrimesResult(2,100);

printFindPrimesResult(2,50000); 