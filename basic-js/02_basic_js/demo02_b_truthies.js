function truthMirror(value){
    if(value){
        console.log(`|${value}| represents truth`);
    } else{
        console.log(`|${value}| represents falsehood`);
    }
}

truthMirror(true);
truthMirror(false);
truthMirror(3>4);
truthMirror(1);
truthMirror(-3);
truthMirror(-0.001);

truthMirror('Hello World');
truthMirror(' ');
truthMirror(new Object());
truthMirror(new Date());
truthMirror([0]);
truthMirror([]);


truthMirror(0);
truthMirror('');
truthMirror(null);
truthMirror(undefined);
truthMirror(NaN);
truthMirror(); //still undefined

truthMirror(2=='2'); //true  compares the values ignoring type (if possible)
truthMirror(2==='2'); //false compares both values and type. both should match.
truthMirror(2!='2'); //false
truthMirror(2!=='2'); //true
