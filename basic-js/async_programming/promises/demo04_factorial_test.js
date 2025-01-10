const {factorialAsync} = require('./async_math');
const {tlog} = require('../utils'); //.. is parent


const testFactorial= n=>{

    factorialAsync(n)
        .then( fn=> tlog(`${n}! = ${fn}`))
        .catch(({message}) => tlog(message))

    tlog(`Calculating ${n}!...`);
}

testFactorial(10); //shold take 10 seconds.
testFactorial(5);
testFactorial(-1);