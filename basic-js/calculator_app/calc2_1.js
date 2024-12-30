
// code provided by the calculator creator

// case 'plus':
//             result = value1 + value2;

function plus(value1,value2){ return value1 + value2};
function minus(value1,value2){ return value1 - value2};
function multiply(value1,value2){ return value1 * value2};
function divide(value1,value2){ return value1 / value2};


function infix(value1,operator,value2,result){
    return `${value1} ${operator} ${value2} = ${result}`;
}

const methodStyle=(value1,operator,value2,result)=>`${operator}( ${value1}, ${value2}) => ${result}`;

const raw=(value1,operator,value2,result)=>result;

let presenter = console.log;

function calculator(value1, operator, value2, formatter='infix') {
    var result=operator(value1,value2);   

    if(formatter==='infix'){
        output=infix(value1,operator.name, value2, result);
    }else if(formatter==='methodStyle')
        output=methodStyle(value1,operator.name, value2, result);
    else if(formatter==='raw')
        output=raw(value1,operator.name, value2, result);
    

    presenter(output);
}


//CONSOLE CLIENT
//The below code shouldn't run in browser apps

try{
    //if next line works
    document.write('');
    //we will not run our code.
}catch(e){
    
    
    calculator(10, plus, 5); //10 plus 5 = 15
    calculator(10, minus, 5); //10 minus 5 = 5
    
    function mod(x,y) {return x%y;}
    
    calculator(10, mod, 5); //10 mod 5 = 0
    
    calculator(10, mod, 3, 'methodStyle');

}

