//spread syntax works with object also.

let person={
    name:'Sanjay',
    age:50,
    email:'sanjay@gmail.com',
}


function sendEmail(person,message){
    //ES5 extracted 'email' from the person.
    console.log(`Sending email to ${person.name}<${person.email}>: ${message}`);
   

}
sendEmail(person, 'Hello, How are you doing?');

function sendEmail2(name,email,message){
    //ES5 extracted 'email' from the person.
    console.log(`Sending email to ${name}<${email}>: ${message}`);
   

}
sendEmail2(person.name,person.email, 'Hello, How are you doing?');

function sendEmail3({name,email},message){
    //ES5 extracted 'email' from the person.
    console.log(`Sending email to ${name}<${email}>: ${message}`);
   

}
sendEmail3(person, 'Hello, How are you doing?');


let food={
    name:'Pizza',
    price:100,
    ingredients:['cheese','pepperoni','onion'],
    cal:700
}


function printCaloryIntake({name},{cal,name:foodName}){
    console.log(`Calory intake of ${name}: ${cal} from ${foodName}`);
}

printCaloryIntake(person,food);