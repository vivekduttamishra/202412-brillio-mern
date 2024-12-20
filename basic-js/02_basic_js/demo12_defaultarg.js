
function foo(x=10, y=15){
    console.log(`x: ${x}, y: ${y}`);
}

foo(2,4); //x=2, y=4

foo(2); //x=2, y=15

foo(); //x=10, y=15

foo(1,2,3,4); //x=1, y=2 