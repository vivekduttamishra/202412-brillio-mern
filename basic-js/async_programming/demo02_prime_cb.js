const {findPrimes} = require('./primes.js');


function printFindPrimesResult(min,max){
    
    console.log(`Finding Primes in rangd ${min}-${max}`)
    findPrimes(min,max, primes=> console.log(`Total Primes found : ${primes.length}`));

}

printFindPrimesResult(2,200000);

printFindPrimesResult(2,100);

printFindPrimesResult(2,50000); 