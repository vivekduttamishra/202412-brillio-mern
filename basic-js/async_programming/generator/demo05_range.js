

function * range(min,max){
    let yieldCount=1;
    for(let i=min;i<max;i++){
       
        let clientSignal=yield i;
       
        if(!isNaN(clientSignal))
            i+=clientSignal;
        else if(clientSignal==='X')
            return;
        
        
    }
}

let gen=range(1,50);

console.log('gen.next()',gen.next()); //1

console.log('gen.next()', gen.next());//2

console.log('gen.next(5)',gen.next(5)); //8

for(let i=0;i<3;i++)
    console.log('gen.next()',gen.next());
    
gen.next('X');

console.log('gen.next()',gen.next());



