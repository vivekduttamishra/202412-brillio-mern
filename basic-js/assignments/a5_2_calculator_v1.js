

function calculator(value1, operator, value2,format="infix") {
    var result;
    switch (operator) {
        case 'plus':
            result = value1 + value2;
            break;

        case 'minus':
            result = value1 - value2;
            break;

        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            result = value1 / value2;
            break;

        default:
            console.log(`invalid operator: '${operator}'`);
            return;
        //result=`Invalid operator`;

    }

    if(format==='infix')
        console.log(`${value1} ${operator} ${value2} = ${result}`);
    else if(format==='method')
        console.log(`${operator}(${value1},  ${value2}) = ${result}`);
}


//Client A
calculator(10, 'plus', 5); //10 plus 5 = 15
calculator(10, 'minus', 5); //10 minus 5 = 5
calculator(10, 'mod', 5); //invalid operator: 'mod'