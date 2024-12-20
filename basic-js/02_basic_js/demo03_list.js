let values=[2,9,8,4];

console.log('values',values);


console.log('values.length',values.length);

console.log('values[2]',values[2]); //8

console.log('values[-1]',values[-1]); //undefined -> no negative index


console.log('values[100]',values[100]); //undefined. No Exception.

values[10]=100; // adds 100 at 10th index. Fills the intermediate indices with undefined.

console.log('values',values);
console.log('values.length',values.length);

//for i in range(len(values))
for(let i=0;i<values.length;i++){
    console.log(`values[${i}]= ${values[i]}`);
}

console.log('using for-in loop');

for(let x in values){
    console.log(x, values[x]); //returns indices of the array
}

//for value in values:
//ES2015 for-of loop
for(let x of values){
    console.log(x); //we get values one by one.
}

