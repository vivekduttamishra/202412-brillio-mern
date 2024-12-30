function plus(a,b){return a + b;}

const minus = (a,b)=>a-b;

function selector(symbol){
    if(symbol==='+')
        return plus;
    else 
        return minus;
}

let x = selector('+'); //what is x?
console.log('typeof(x)',typeof(x)); //function
console.log('x.name',x.name);   //plus
console.log('x(2,3)',x(2,3)); //5

//how do I call minus?

console.log('selector("-")(9,3)',selector("-")(9,3));  //selector(-) ==> minus ==> minus(9,3) => 6


let o1=selector('+'); 
let o2=selector('-');
let o3=selector('+');

console.log('o1===o2',o1===o2); //false  plus===minus

console.log('o1===o3',o1===o3); //true  plus===plus




