

function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

const multiply = (a, b) => a * b;

const pi = 3.14159

function test() {
    console.log(plus(10, 2));
    console.log(minus(10, 2));
    console.log(multiple(5, 3));
    console.log(pi);
}

//create a module object.

//this code will work only browser based application

//code will fix problem for browser based applications

var m;

try{
    m=module;
    console.log('welcome to nodeJs')
    
}catch(e){
    m={
        exports: {}
    }
    console.log('welcome to browser based application')
    module=m;
    // function require(){
    //     return module.exports;
    // }
}





module.exports = {
    sum: plus,
    multiply: multiply,
    pi: pi
};
