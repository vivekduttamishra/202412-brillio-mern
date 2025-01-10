
function wasteTime(value){
    for(var x=0;x<value;x++)
        for(var y=0;y<value;y++)
            for(var z=0;z<value;z++)
                ;
}

function factorial(n){
    wasteTime(2000);
    let fn=1;
    for(let i=1;i<=n;i++)
        fn*=i;
    return fn;
}

function testFactorial(n){
    console.log('calculating factorial of',n)
    let fn=factorial(n);
    console.log('factorial of',n,'is',fn);
}

testFactorial(10);
testFactorial(5);