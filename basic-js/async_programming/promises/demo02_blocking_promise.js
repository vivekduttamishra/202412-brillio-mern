
function wasteTime(value){
    for(var x=0;x<value;x++)
        for(var y=0;y<value;y++)
            for(var z=0;z<value;z++)
                ;
}

function factorial(n){
    const promise = new Promise(function(resolve, reject){
        wasteTime(2000);
        let fn=1;
        for(let i=1;i<=n;i++)
            fn*=i;
        resolve(fn);//return fn;

    });

    return promise;
    
}

function testFactorial(n){
    
    let p=factorial(n); //should return a promise immediately
    
    //we should reach here immediately
    p.then(fn=> console.log('factorial of',n,'is',fn));

    //we should reach here also immediately.
    console.log('calculating factorial of',n)
    
}

testFactorial(10);
testFactorial(5);