var {search}=require('./utils.js')

let numbers=[2,3,11,8,9,15,4,2,20];

let result=search(numbers, number=>number%3===0);

console.log('result',result);
