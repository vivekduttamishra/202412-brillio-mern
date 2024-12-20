
function foo(x=10, y=x){
    console.log(`x: ${x}, y: ${y}`);
}

foo(2,4); //x=2, y=4

foo(2); //x=2, y=2

foo(); //x=10, y=10

foo(1,2,3,4); //x=1, y=2 