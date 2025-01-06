//require('./utils.js');

Array.prototype.search = function (match) {
    let result = [];
    for (let value of this) {
        if (match(value))
            result.push(value);
    }
    return result;
}


class Person {
    constructor(name, age, gender, isAlive = true) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isAlive = isAlive;

        //associations
        this.skills = [];
        this.employements = [];

        this.relations = [];
    }

    addRelation(relation, ...people) {
        for (let person of people)
            this.relations.push({ type: relation.toLowerCase(), person: person });

        return this;
    }

    getRelations(type) {
        // type=type.toLowerCase();
        // let matchingRelations= this.relations.search(relation=> relation.type===type)
        // let result=[];
        // for(let matchingRelation of matchingRelations)
        //     result.push(matchingRelation.person);
        // return result;

        //return matchingRelations.map(r=>r.person);

        return this
            .relations
            .filter(relation => relation.type === type)
            .map(r => r.person);

    }
}

Person.prototype.getRelation=function(type){
    let result = this.getRelations(type);
    if(result.length)
        return result[0];
    else
        return undefined
}

Person.prototype.father=function(){
    //console.log('relations',this.relations);
    let result= this.relations
                        .find(r=> r.type==='father' || (r.type==='parent' && r.person.gender==='male'))
                        
    if(result)
        return result.person;
    //else
    //    return undefined
}





let pandu = new Person('Pandu', 45, "male", false);
let kunti = new Person('Kunti', 40, "female");
let madri = new Person('Madri', 40, "female");

// pandu.addRelation({type:'spouse', with:kunti});
// pandu.addRelation({type:'spouse', with:madri});

pandu.addRelation('spouse', kunti, madri);



let yudhishtir = new Person('Yudhishtir', 20, "male");
yudhishtir.addRelation("mother", kunti);
let bhimasena = new Person('Bhimasena', 20, "male").addRelation("mother", kunti);
let arjuna = new Person('Arjuna', 20, "male").addRelation("mother", kunti);
let nakula = new Person('Nakula', 20, "male").addRelation("mother", "madri");
let sahadeva = new Person('Sahadeva', 20, "male").addRelation("mother", "madri");

let pandavas = [yudhishtir, bhimasena, arjuna, nakula, sahadeva];

for (let pandava of pandavas) {
    pandava.addRelation("father", pandu);
    let brothers = pandavas.search(p => p !== pandava);
    pandava.addRelation("brother", ...brothers);
}

console.log('arjuna', arjuna);
console.log('brothers of Arjuna')

for (let person of arjuna.getRelations('brother').map(b => b.name)) {
    console.log(person)
}

//arjuna's father's wives

// for(let person of arjuna.getRelations('father')[0].getRelations('spouse')){
//     console.log(person.name)
// }

console.log('--------')
arjuna
        //.getRelations('father')[0]
        .father()
        .getRelations('spouse') //father's spouses
        .map(p => p.name)
        .forEach(n=>console.log(n));








