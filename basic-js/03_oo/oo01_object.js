
//create an object

let p = new Object();

//now we have an object 'p'
//but we do not know any of its properties or behavior.
console.log('p',p); // {} -> an empty object.

//now we can attach properties to it after its creation
p.name='Sanjay';
p.age=50;

//now we can check this object again.
console.log('p',p); //{ name: 'Sanjay', age: 50 }

//we can also access its individual properties using standard dot notation.
console.log('p.name',p.name);
console.log('p.age',p.age);




