
function plus(a,b){return a+b;} //normal function

let minus = function(a,b){return a-b;} //function as object

let multiply = (a,b) => a*b; //lambda function

let operations = [
    plus,
    minus,
    multiply,
    (a,b)=>a/b, //divide
]

let x=50, y=15;

for(let i=0;i<operations.length;i++){
    let result = operations[i](x,y)
    console.log(`${operations[i].name}(${x},${y}) => ${result}`);    
}