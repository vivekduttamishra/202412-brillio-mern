const {primeGenerator} =require('./primes');
const {tlog}= require('../utils')

tlog('creating generator')
let primes100 = primeGenerator(0,1000000);

//we reach here immediately. calculation doesn't start without calling next.
tlog('generator created for 0-10Lac')

for(let i=0;i<10;i++)
    tlog(primes100.next()); //next controls inner execution of primeGenerator

//primeGenerator has a range of 10Lac
//but it has stopped at 10th prime 29
//it will not execute loop again till we call next()

setTimeout(()=>{
    console.log(primes100.next())
},5000);