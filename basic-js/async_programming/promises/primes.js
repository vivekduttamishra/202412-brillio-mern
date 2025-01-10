
function isPrime(number){
    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;
    return true;
}

function findPrimesNotAsync(min,max){

    return new Promise((resolve,reject)=>{
        if(min>=max)
            return reject(new Error(`Invalid Range: ${min} - ${max}`));

        let primes=[];
        for(let i=min;i<max;i++){
            if(isPrime(i))
                primes.push(i);
        }

        resolve(primes);
    });
}


function findPrimesAsync(min,max){
    return new Promise((resolve,reject)=>{
        if(min>=max)
            return reject(new Error(`Invalid Range: ${min} - ${max}`));

        let number=min;
        let primes=[];
        const iid=setInterval(()=>{
            //real long running task
            
            while(true){
                
                if(isPrime(number))
                    primes.push(number);
    
                number++;
                if(number===max){
                    clearInterval(iid);
                    resolve(primes);
                    return;
                }
    
                if(number%1000===0){
                    break; //take a short break;
                }

            }

        },0);

    });
}





try{
    module.exports={
        findPrimesAsync,
        isPrime
    }
}catch(e){
    //no problem. web app
}