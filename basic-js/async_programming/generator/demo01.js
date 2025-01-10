
function *gen(){

    console.log('calling yield1');
    yield 1;
    console.log('calling yield2');
    yield 2;
    console.log('calling yield3');
    yield 3;

}

let x =gen();

console.log(x);

console.log('now generating...')

console.log('x.next()',x.next());

console.log('x.next()',x.next());

console.log('x.next()',x.next());

console.log('x.next()',x.next());

console.log('x.next()',x.next());




