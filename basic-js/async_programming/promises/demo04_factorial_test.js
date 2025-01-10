const {factorialAsync,factorial} = require('./async_math');
const {tlog} = require('../utils'); //.. is parent


const testFactorialSync = n =>{
    tlog(`Calculating ${n}!...`);
    let fn = factorial(n);
    tlog(`${n}! = ${fn}`);
}

const testFactorial_promise= n=>{

    factorialAsync(n)
        .then( fn=> tlog(`${n}! = ${fn}`))
       

    tlog(`Calculating ${n}!...`);
}

const testFactorial= async (n) =>{
    tlog(`Calculating ${n}!...`);

    let fn = await factorialAsync(n);
    
    tlog(`${n}! = ${fn}`);

}




testFactorial(10); //shold take 10 seconds.
testFactorial(5);
testFactorial(-1);