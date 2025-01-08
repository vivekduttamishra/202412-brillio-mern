var {sort} = require('./utils.js')

let numbers=[2,9,11,14,7,15,4];



sort(numbers, (n1,n2)=>n1<=n2)

console.log('ascending sort',numbers);

sort(numbers, (n1,n2)=>n1>=n2)

console.log('descending sort',numbers);

//i need output 2,4,15,7,9,11,15

sort(numbers,(n1,n2)=>{
    let t1=n1%2;
    let t2=n2%2;
    if(t1===t2){
        return n1<=n2;
    }else
    return t1<=t2;
})

console.log('sort by even and odd',numbers);



sort(numbers);
console.log('natural ascending sort',numbers);


let names=['India','USA', 'France', 'Canada','Japan','UK'];

sort(names,(n1,n2)=> n1.length<=n2.length);

console.log('names',names);







