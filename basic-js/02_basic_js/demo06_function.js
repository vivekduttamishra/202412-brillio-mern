function sum(x,y){
    return x+y;
}

function divide(x,y){
    return x/y;
}

console.log('sum(2,3)',sum(2,3));

console.log('sum("hello","world")',sum("hello","world"));

console.log('sum(false,20)',sum(false,20));

console.log('sum(false,new Date())',sum(false,new Date()));

console.log('divide(2,3)',divide(2,3));

console.log('divide("hello",4)',divide("hello",4)); //NaN -> not a number
