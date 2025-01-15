const {delay} = require('./utils');


async function testDelay(){
    //print hello and world after 2 second each
    //hello after 2 second 
    //world afgter another 2 seconds.
    process.stdout.write('Please wait...\n');
    await delay(2000);
    process.stdout.write('Hello ');
    await delay(2000);
    process.stdout.write('World!\n');
    

}

testDelay();