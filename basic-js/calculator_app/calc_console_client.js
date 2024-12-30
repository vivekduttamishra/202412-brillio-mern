/// include calc2_1.js


presenter=result=>console.log(result);

calculator(10, plus, 5); //10 plus 5 = 15
calculator(10, minus, 5); //10 minus 5 = 5

function mod(x,y) {return x%y;}

calculator(10, mod, 5); //10 mod 5 = 0

calculator(10, mod, 3, 'methodStyle');