
function showPerson(person){
    console.log('Name:',person.name);
    console.log('Age:',person.age);
    console.log();
}

function eat(person,food){
    console.log(`${person.name} is eating ${food}`);
}

let sanjay = new Object();
sanjay.name='Sanjay';
sanjay.age=50;
sanjay.show=showPerson;
sanjay.eat=eat;

sanjay.eat(sanjay, 'Lunch');

//lets create a second person
let shivanshi={
    name:'Shivanshi',
    age:45,
    show:showPerson,
    eat:eat,
}

shivanshi.eat(shivanshi, 'Maggi');

shivanshi.eat(sanjay, 'Lunch');


