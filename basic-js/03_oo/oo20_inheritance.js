

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    showDetails(){
        console.log(`Name: ${this.name}\tAge: ${this.age}`);
    }
}

let sanjay = new Person('Sanjay',50);
sanjay.showDetails();

class Employee extends Person{
    constructor(id,name, age, salary){
        super(name, age); // call parent's constructor
        // this.name=name;
        // this.age=age;
        this.id=id;
        this.salary=salary;
    }
}

let vivek=new Employee(1, 'Vivek', 1000, 500000);

console.log('vivek instanceof Employee',vivek instanceof Employee);
console.log('vivek instanceof Person',vivek instanceof Person);
console.log('vivek instanceof Object',vivek instanceof Object);
