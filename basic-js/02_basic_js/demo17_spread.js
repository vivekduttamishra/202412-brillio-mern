

let numbers1=[1,2,3,4];
let numbers2=[6,7,8,9,10];


let values = [...numbers1,5,...numbers2];

console.log('values',""+values);


let a=[1,2,3,4];
let b=[1,2,3,4];
let c=[1,2,3,4];

//push modifies original array and appends a new value
let x=a.push(15);
console.log('a after push',a);
console.log('x after push',x);

//concat creates a new array with values of current array and addpends the value
let y=b.concat(15);
console.log('b after concat',b);
console.log('y after concat',y);

//we are creating a new array, spreading current array along with new value;
let z=[...c,15];





