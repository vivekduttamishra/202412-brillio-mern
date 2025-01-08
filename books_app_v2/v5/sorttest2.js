//extecutes utils.js and creates module object.
require('./utils.js');  

let numbers=[2,3,9,8,1,4,7];

numbers.sort();

console.log('ascending sort',numbers);

console.log('even numbers', numbers.search(n=>n%2===0))