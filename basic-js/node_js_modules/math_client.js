try{
    var x = require('./lib.js')
    //good news we are in node.js
}catch(e){
    //we are in browser app
    //we expect script to give me plus, multiply and pi
    var x={
        sum:plus,
        multiply,
        pi
    }
}

function main(){
    
    console.log('x',x);
    
    console.log('x.pi',x.pi);
    
    console.log('x.sum(2,3)',x.sum(2,3));
   

}

main();

