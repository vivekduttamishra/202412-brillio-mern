function sum(x,y){
    return x+y;
}

function divide(x,y){
    return x/y;
}

console.log('sum(2,3)',sum(2,3));

//function doesn't know it should take numbers
//we can pass anything
//sometimes it may work. eg. sum of string
console.log('sum("hello","world")',sum("hello","world"));

//sometimes it may work in unexpected way
console.log('sum(false,20)',sum(false,20));

console.log('sum(false,new Date())',sum(false,new Date()));

console.log('divide(2,3)',divide(2,3));

//sometimes it may give unexpected result
console.log('divide("hello",4)',divide("hello",4)); //NaN -> not a number
