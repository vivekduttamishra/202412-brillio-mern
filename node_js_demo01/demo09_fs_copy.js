const { readFile, writeFile } = require('fs');


const fileCopy = (src, target) => {
    console.log(`------- copying ${src} to ${target}-----`);
    let start = new Date();
    readFile(src, (error, data) => {

        if (error) {
            console.log(`Error reading ${src}`)
            let end = new Date();
            console.log(`Total time taken is ${end - start} ms`);
        } else {
            writeFile(target, data, (error) => {
                if (error) {
                    console.log(`Error writing to ${target}:${error}`)
                } else {
                    console.log(`${src} copied to ${target}`);
                }

                let end = new Date();
                console.log(`Total time taken to copy ${src} to ${target} is ${end - start} ms`);
                console.log('--------------------------------\n\n')
            });
        }


    });
    //process.stdout.write(data)


}

fileCopy('big.txt', 'big2.txt');
fileCopy('small.txt', 'small2.txt');
fileCopy('not-found.txt', 'notfound2.txt');