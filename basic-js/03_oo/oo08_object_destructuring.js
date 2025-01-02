var person = {
    name: "John Doe",
    age: 30,
    email:'john@example.com'
}

console.log('person',person);


//how do I assing name and email of this person to a variable.

//ES5 way (common to all programming languages)

var name=person.name;
var email=person.email;
console.log('name',name);
console.log('email',email);

//ES2015+ object destructuring syntax.
var person = {
    name: "John Doe",
    age: 30,
    email:'john@example.com'
}

var {name,email, age:ageInYears} = person;

console.log('ageInYears',ageInYears);
