//spread syntax works with object also.

let person={
    name:'Sanjay',
    age:50,
    email:'sanjay@gmail.com',
}


function sendEmail(person,message){
    //ES5 extracted 'email' from the person.
    console.log(`Sending email to ${person.email}: ${message}`);

    let {email}=person; //take email from object
    console.log(`Sending email to ${email}: ${message}`);

}

sendEmail(person, 'Hello, How are you doing?');

function sendEmail2({email},message){
 
   
    console.log(`Sending email to ${email}: ${message}`);

}

sendEmail2(person, 'Hello, How are you doing?');


function sendEmail3(email,message){
 
   
    console.log(`Sending email to ${email}: ${message}`);

}

sendEmail3(person.email, 'Hello, How are you doing?');