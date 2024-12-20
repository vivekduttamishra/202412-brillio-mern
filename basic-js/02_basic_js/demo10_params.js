//ES2015 params syntax.
//Arguments concept made more explicit
//Now we can pass any number of arguments and automatically collect it in
// a real array.

//we just need to prefix the parameter with ...
//It is similar to pythons *args

function sum(...numbers){
    let sum=0;
    for(let number of numbers)
        sum+=number;
    return sum;    
}


sum(9,2,8,5); //numbers=[9,2,8,5]
sum(11) ; //numbers=[11]
sum() ; //numbers=[]
