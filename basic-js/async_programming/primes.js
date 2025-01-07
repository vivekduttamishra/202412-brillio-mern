
function isPrime(n){
    if(n<2) return false;

    for(let i=2;i<n;i++)
        if(n%i===0)
            return false;

    return true;
}

function findPrimesSync(min,max){
    let primes=[];
    for(let i=min;i<=max;i++){
        if(isPrime(i))
            primes.push(i);
    }
    return primes;
}

function findPrimes(min,max,cb){
    let primes=[];
    for(let i=min;i<=max;i++){
        if(isPrime(i))
            primes.push(i);
    }
    //return primes;
    cb(primes);
}

try{
    module.exports={
        isPrime,
        findPrimesSync,
        findPrimes,
    }
}catch(e){
    //window applicaiton.
    //no harm done.
}