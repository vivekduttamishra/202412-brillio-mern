
// code provided by the calculator creator

// case 'plus':
//             result = value1 + value2;

function plus(value1, value2) { return value1 + value2 };
function minus(value1, value2) { return value1 - value2 };
function multiply(value1, value2) { return value1 * value2 };
function divide(value1, value2) { return value1 / value2 };

const operators = {
    'plus': plus,
    'minus': minus,
    'multiply': multiply,
    'divide': divide,

}


const routes = {
    '/books': {get:getAllBools, post: addBook},
    'GET /books/*': getBooksById,
    'GET /authors': getAllAuthors,
    'POST /books': addBook,
    'Get /authors/*': getAuthorById,

}


function calculator(value1, operator, value2, outputChoice) {
    if (operators[operator]) {
        var result = operators[operator](value1, value2);
        if(outputChoice===1)
            console.log(`${value1} ${operator.name} ${value2} = ${result}`);
        else
            console.log(`${operator.name}(${value1}, ${value2}) = ${result}`);

    } else {
        console.log(`Invalid operator ${operator}`);
    }

}


//client code. for calculator user.

calculator(10, 'plus', 5); //10 plus 5 = 15
calculator(10, 'minus', 5); //10 minus 5 = 5

calculator(10, 'mod', 5); //10 mod 5 = 0

operators["power"]=(x,y)=>x**y;

calculator(2, 'power', 3); //2 power 3 = 8