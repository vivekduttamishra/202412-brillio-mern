let values=[2,9,'Hi',new Date(),8,4];

for(let value of values){
    console.log(typeof(value),value);
}

values.push(100);

console.log(values);

let removedValues=values.splice(2,2); //remove 2 items starting index 2

console.log('values',values);

console.log('removedValues',removedValues);


values=[2,3,4,9];

let result = values.push(200); //adds 200 in existing array;
console.log('result',result); //size of updated list. no new list created.

console.log('values',values);

let result2=values.concat(300); //create a new list with current values and 300

console.log('result2',result2); //[all values from values, 300]

console.log('values',values); //no change  in values array.


