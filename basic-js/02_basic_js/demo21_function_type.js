function plus(a,b){
    return a+b;
}

//plus is a type of "function"

console.log('typeof(plus)',typeof(plus));
console.log('plus.name',plus.name);

var add=plus;

console.log('typeof(add)',typeof(add)); //function
console.log('add.name',add.name);  //plus. Actual object is plus, add is a ref
console.log('add(2,3)',add(2,3)); //5

plus=5; //not implicit global. already created by 'function' keyword.
console.log('add(2,2)',add(2,2));

console.log('plus(2,2)',plus(2,2));

