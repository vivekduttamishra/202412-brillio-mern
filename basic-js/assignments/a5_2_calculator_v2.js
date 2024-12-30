
// code provided by the calculator creator

// case 'plus':
//             result = value1 + value2;

function plus(value1,value2){ return value1 + value2};
function minus(value1,value2){ return value1 - value2};
function multiply(value1,value2){ return value1 * value2};
function divide(value1,value2){ return value1 / value2};




function calculator(value1, operator, value2) {
    var result=operator(value1,value2);   

    console.log(`${value1} ${operator.name} ${value2} = ${result}`);
}


//client code. for calculator user.

calculator(10, plus, 5); //10 plus 5 = 15
calculator(10, minus, 5); //10 minus 5 = 5

function mod(x,y) {return x%y;}

calculator(10, mod, 5); //10 mod 5 = 0