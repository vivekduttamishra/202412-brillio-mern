//creates a global reference plus
function plus(a,b){
    return a+b;
}

//creates another global reference add

let add = plus;

console.log('plus(2,3)',plus(2,3));
console.log('add(2,3)',add(2,3));


//can we combine the two in a single line?

let sub = function minus(a,b){
    return a-b;
}

console.log(`sub(10,2) => ${sub.name}(10,2) => ${sub(10,2)}`);
//
// 
// console.log(`minus(10,2) => ${minus.name}(10,2) => ${minus(10,2)}`);



let multiply = function(a,b){
    return a*b;
}

console.log('multiply.name',multiply.name);
console.log('multiply(5,3)',multiply(5,3));
