//spread syntax works with object also.

let person={
    name:'Sanjay',
    age:50,
    email:'sanjay@gmail.com',
}

//now person becomes an employee in some company

let employee={
    id:14,
    salary:20000,
    //other details of person like name and age
    //standard ES05 syntax
    // name:person.name,
    // age:person.age,
    
    //ES2015 spread syntax.
    ...person, //take all properties of person. overwrite matching properties
    email:'sanjay@company.com', //overwrite older properties.
    personalEmail:person.email,
}

console.log('employee',employee);
