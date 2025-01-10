
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

function findPrimesSync(min, max) {
    let primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    return primes;
}

// function findPrimes(min, max, cb) {
//     setTimeout(function () {
//         let primes = [];
//         for (let i = min; i <= max; i++) {
//             if (isPrime(i))
//                 primes.push(i);
//         }
//         //return primes;
//         cb(primes);
//     }, 5000)
// }


function findPrimes(min,max,cbResult, cbProgress=()=>{}){

    let primes=[];
    let lo=min;
    let hi=Math.min(lo+1000,max);

    const iid=setInterval(()=>{

        if(max<=min){
            clearInterval(iid);
            return cbResult(new Error(`Invalid Range ${min}-${max}`));

        }

        for(let i=lo;i<hi;i++){
            if(isPrime(i)){
                primes.push(i);
            }
        }

        //report progress
        let pc = Math.ceil((hi-min)/(max-min)*100);
        cbProgress(null,pc);

        lo=hi;
        hi=Math.min(lo+1000,max);
        if(lo>=max){
            cbResult(null,primes);
            clearInterval(iid);
        }

    },1);

}





try {
    module.exports = {
        isPrime,
        findPrimesSync,
        findPrimes,
    }
} catch (e) {
    //window applicaiton.
    //no harm done.
}