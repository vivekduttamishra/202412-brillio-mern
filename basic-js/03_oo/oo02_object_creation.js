
function showPerson(person){
    console.log('Name:',person.name);
    console.log('Age:',person.age);
    console.log();
}

//create an object

//Approach #1 "new Object"
let p1 = new Object();
p1.name='Sanjay';
p1.age=50;
showPerson(p1);

//Approach #2 shortcut object notation
let p2= {} ; //same as new Object
p2.name='Prabhat';
p2.age=40;
showPerson(p2);


//Approach #3 creating an initialized object
let p3= {
    name:'Rahul',
    age:35
};

showPerson(p3);

p3['email'] = 'rahul@gmail.com'; //same as p3.email = 'rahul@gmail.com'
console.log('p3.email',p3.email);
console.log('p1["name"]',p1["name"]);

