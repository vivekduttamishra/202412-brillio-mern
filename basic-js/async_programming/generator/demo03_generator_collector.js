const {primeGenerator} =require('./primes');
const {tlog}= require('../utils')

function collector(gen){
    let result=[];
    for(let value of gen)
        result.push(value);
    return result;
}


let result = collector(primeGenerator(0,100));

tlog(result);

let result2= [...primeGenerator(100,200)]

console.log('result2',result2);
