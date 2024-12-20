
//sum(...numbers)=> make an array of all individual values passed.
function sum(...numbers){
    let sum=0;
    for(let number of numbers){
        
        sum+=number;
    }
    
    return sum;    
}

function average(...numbers){

    return sum(...numbers)/numbers.length;
}


console.log('average(1,2,3,4)',average(1,2,3,4));
console.log('average(1,2,3,4,5)',average(1,2,3,4,5));
