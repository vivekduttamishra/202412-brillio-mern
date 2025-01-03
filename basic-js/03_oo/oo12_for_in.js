function show(anything){

    for(let property in anything)
        console.log(property,':',anything[property]);
    console.log();
}


let person={
    name:'Sanjay',
    age:50,
    email:'sanjay@gmail.com',
}

show(person);




let food={
    name:'Pizza',
     price:100,
    ingredients:['cheese','pepperoni','onion'],
    cal:700
}

show(food);

