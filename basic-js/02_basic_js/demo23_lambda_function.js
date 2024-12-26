
let factorial = n=>{
    let fn=1;
    for (let i=0; i<n; i++)
        fn*=n--;

    return fn;
}

console.log('factorial(5)',factorial(5));
console.log('factorial.name',factorial.name);


let multiply=  (x,y)=>x*y;

console.log('multiply(5,12)',multiply(5,12));

