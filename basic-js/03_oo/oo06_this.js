
function eat(food){
    console.log(`${this.name} is eating ${food}`);
}


let shivanshi={
    name:'Shivanshi',
    eat:eat //here 'this' refers to shivanshi object
}

shivanshi.eat('Mango');

var name='A global name';

eat('apple'); //who is eating? What is this?


