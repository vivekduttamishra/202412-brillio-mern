function f1(){
 
    console.log('g inside f1 before modification',g);
    g=g.toUpperCase();
    console.log('g inside f1 after modification',g);
    
}

let g="global";

f1();

console.log('g',g);
