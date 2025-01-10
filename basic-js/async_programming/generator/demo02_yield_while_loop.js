
function *gen(){

    console.log('calling yield1');
    yield 1;
    console.log('calling yield2');
    yield 2;
    console.log('calling yield3');
    yield 3;

    console.log('done')

}

let x =gen();
let item = x.next();

while(!item.done){

    console.log(item.value);
    item = x.next();
}


