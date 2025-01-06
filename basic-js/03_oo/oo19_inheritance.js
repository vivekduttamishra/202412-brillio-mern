
// class Egg{
//     constructor(type){
//          this.type=type;
//     }

//     hatch(){
//         return new this.type();
//     }
// }

class Egg{
    hatch(){
        throw new Error('Unspecified egg type')
    }
}

class CrowEgg extends Egg{
    hatch(){
        return new Crow();
    }
}

class ParrotEgg extends Egg{
    hatch(){
        return new Parrot();
    }
}


class Crow{
    fly(){
        console.log('flies...');
    }
    layEgg(){
        return new CrowEgg();
    }
    get color(){return 'black';}
}

//inherits all properties from crow.
class Parrot extends Crow{

    //overwrites inherited property
    get color(){return 'green';}

    layEgg(){ return new ParrotEgg(); }

}


let parrot = new Parrot();
console.log('p.color',parrot.color);

parrot.fly();


let child = parrot.layEgg().hatch(); //what baby comes out?
console.log('child.color',child.color);
console.log('child.__proto__.constructor.name',child.__proto__.constructor.name);



