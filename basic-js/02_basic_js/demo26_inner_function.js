function plus(a,b){return a + b;}
function selector(symbol){
    
    function minus(a,b){return a - b;}
    
    if(symbol==='+')
        return plus;
    else 
        return minus;
}


let plus1= selector('+');
let plus2= selector('+');

let minus1= selector('-');
let minus2= selector('-');

console.log('plus1===plus2',plus1===plus2); //true

console.log('minus1===minus2',minus1===minus2);//false

console.log('minus1(5,2)',minus1(5,2));
console.log('minus2(5,2)',minus2(5,2));
console.log('minus1.name',minus1.name);
console.log('minus2.name',minus2.name);



