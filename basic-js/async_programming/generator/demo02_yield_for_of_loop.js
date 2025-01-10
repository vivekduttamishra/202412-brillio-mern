
function *gen(){

    console.log('calling yield1');
    yield 1;
    console.log('calling yield2');
    yield 2;
    console.log('calling yield3');
    yield 3;

    console.log('done')

}

for(let value of gen())
    console.log(value);



