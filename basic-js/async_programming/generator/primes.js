

function isPrime(number){
    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;
    return true;
}

function *primeGenerator(min,max){
    for(let num=min;num<=max;num++){
        if(isPrime(num))
            yield num;
    }
}

module.exports={
    primeGenerator,
    isPrime,
}