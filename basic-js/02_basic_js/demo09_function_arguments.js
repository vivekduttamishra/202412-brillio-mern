function sum(){
    
    //arguments is implicit 
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}


console.log('sum(2,3)',sum(2,3));

console.log('sum(2,3,4,5,6,7)',sum(2,3,4,5,6,7)); 
console.log('sum(1)',sum(1)); 
console.log('sum()',sum());


