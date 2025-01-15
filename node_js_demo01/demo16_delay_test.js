const {delay} = require('./utils');


function testDelay(){
    //print hello and world after 2 second each
    //hello after 2 second 
    //world afgter another 2 seconds.
    process.stdout.write('Please wait...\n');

    setTimeout(()=>{
        process.stdout.write('Hello ')
    },2000);

    delay(4000).then(()=> process.stdout.write('World'));

}

testDelay();