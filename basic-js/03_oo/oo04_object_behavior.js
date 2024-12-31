
function showPerson(person){
    console.log('Name:',person.name);
    console.log('Age:',person.age);
    console.log();
}


let p1 = new Object();
p1.name='Sanjay';
p1.age=50;

//we can show it using external function
showPerson(p1);

//But showPerson can also be a behavior for p1 object.
// A function is also a property.
p1.show=showPerson;
console.log('p1',p1);


//calling show function.

p1.show(p1);