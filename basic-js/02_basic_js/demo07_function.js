function sum(x,y){
    return x+y;
}


console.log('sum(2,3)',sum(2,3));

console.log('sum(2,3,4,5,6,7)',sum(2,3,4,5,6,7)); //ingores additional arguments.

console.log('sum(1)',sum(1)); //sum(1,undefined) -> NaN

