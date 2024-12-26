
var g="global";

function f1(){
    var f1l1="F1 Local"; //local to f1
    f1l2="Implicit Global"; //implicit global. available everywhere after function is called.

    console.log(`In f1`);
    console.log('g',g);
    console.log('f1l1',f1l1);
    console.log('f1l2',f1l2);
    
    
}

function f2(){
    
    console.log(`In f2`);
    console.log('g',g);
    console.log('f1l2',f1l2);
    console.log('f1l1',f1l1);
    
}
f1();
f2();