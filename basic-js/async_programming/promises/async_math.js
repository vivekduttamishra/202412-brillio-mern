

function factorialAsync(n) {
    return new Promise((resolve, reject) => {

        if (n < 0) {
            reject(new Error('n can not be negative'));
            return;
        }

        let fn = 1

        const iid = setInterval(() => {
            fn *= n--;
            if (n === 0) {
                clearInterval(iid);
                resolve(fn);
                return;
            }

        }, 1000); //DONT USE 1 sec delay in production. It is to just learn long running job.

    });
}


//WILL NOT WORK.
//If result comes in future, we can't return anything in present.
function permutationAsyncBadV1(n, r) {
    let fn, fn_r
    factorialAsync(n).then(r => {
        //we reach here after "n" seconds
        fn = r;
    })
    factorialAsync(n - r).then(r => {
        //we reach here after "n-r" seconds
        fn_r = r
    })

    //we reach here immediately.
    return fn / fn_r;
}



function permutationAsyncBadV2(n, r) {

    return new Promise((resolve, reject) => {
    
        let fn, fn_r
        factorialAsync(n).then(r => {
            //we reach here after "n" seconds
            fn = r;
        })
        factorialAsync(n - r).then(r => {
            //we reach here after "n-r" seconds
            fn_r = r
        })
    
        //we reach here immediately.
        resolve( fn / fn_r);

    });
}
function permutationAsyncV3(n, r) {

    return new Promise((resolve, reject) => {
    
        
        factorialAsync(n).then(fn => {
            //we reach here after "n" seconds
            factorialAsync(n - r).then(fn_r => {
                //we reach here after "n-r" seconds
                resolve(fn/fn_r);
            })
        })
    
        

    });
}



function permutationAsyncV3(n, r) {

    return new Promise((resolve, reject) => {
    
        if(n<0 || r<0 || n<r){
            return reject(new Error('Invalid value'));
        }
        
        let fn,fn_r
        factorialAsync(n).then(result=> {
            //we reach here after "n" seconds
            fn=result
        });
        
        factorialAsync(n - r).then(result => {
            //we reach here after "n-r" seconds
            fn_r=result;
        });

        //we reach here immediately.
        //we must wait for results before calculating permutation
        const iid=setInterval(() => {
            if(fn && fn_r){
                resolve(fn/fn_r);
                clearInterval(iid);
                return;
            }
        },100); 
        

    });
}



try {
    module.exports = {
        factorialAsync,
        permutationAsync:permutationAsyncV3
    }
} catch (e) {
    //no problem. web app
}