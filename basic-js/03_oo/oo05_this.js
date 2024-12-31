
function eat(food){
    console.log(`${this.name} is eating ${food}`);
}

let sanjay=new Object();
sanjay.name='Sanjay'
sanjay.eat=eat;  //here 'this' refers to sanjay object


let shivanshi={
    name:'Shivanshi',
    eat:eat //here 'this' refers to shivanshi object
}

sanjay.eat('pizza'); // Sanjay is eating pizza

shivanshi.eat('ice-cream'); // Shivanshi is eating ice-cream

eat('apple'); //who is eating?


