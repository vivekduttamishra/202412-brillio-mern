

function createPerson(name,email,age,...hobbies){
    let p=new Object();

    p.name=name;
    p.email=email;
    p.age=age;
    p.hobbies=hobbies;
    
    p.toString=function(){
        //return `Person [Name="${name}"\tEmail="${email}]`

        let result ='Person [';

        for(let property in this){
            if(typeof(this[property])!=='function')
                result+=`${property}: ${this[property]}\t`
        }

        return result+"]";

    }
    p.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    p.sleep=()=>{
        console.log(`${this.name} is sleeping`);
    }

    return p;
}

let sanjay= createPerson('Sanjay','sanjay@gmail.com', 50,'reading','tvshows');

let shivanshi= createPerson('Shivanshi','shivanshi@gmail.com',18);

sanjay.eat('Lunch');
shivanshi.eat('Maggi');

console.log(sanjay.toString());

//toString is predefined as is automatically called
//when we try to add two string or use
//`${}` interpolation syntax.
console.log(''+shivanshi); //automatically call toString()

sanjay.sleep();