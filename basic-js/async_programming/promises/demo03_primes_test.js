const {findPrimesAsync} = require('./primes.js');


function testPrimes(min,max){

    let p= findPrimesAsync(min,max);
    p
        .then(primes=>console.log(`There are ${primes.length} primes in range ${min}-${max} `))

        .catch(error=> console.error('Error :',error.message));


    //we should reach here immediately
    console.log(`finding primes between ${min} and ${max}`)

}

testPrimes(2,1000000);
testPrimes(2,100)
testPrimes(100,2)
testPrimes(0,50000)