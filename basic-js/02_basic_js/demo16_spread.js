

function sum(x,y){
    return x+y;
}

console.log('sum(2,4)',sum(2,4));

let values=[9,2];

console.log('sum(values)',sum(values)); //sum([9,2]) => x=[9,2], y=udefined => [9,2]+undefined.

console.log('sum(values[0],values[1])',sum(values[0],values[1]));

console.log('sum(...values)',sum(...values)); //sum(9,2)


let values2=[1,2,3];

console.log('sum(...values2)',sum(...values2)); //sum(1,2,3); => x=1, y=2 =>3

