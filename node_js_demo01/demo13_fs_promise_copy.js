const { readFile, writeFile } = require('fs').promises;


const fileCopy = (src, target) => {
    console.log(`------- copying ${src} to ${target}-----`);
    let start = new Date();
    readFile(src)
        .then(data => {
            writeFile(target,data)
                .then(() => {
                    let end = new Date();
                    console.log(`Total time taken to copy ${src} to ${target} is ${end - start} ms`);
                })
                .catch(error => console.error(`Error writing to ${target}:${error.message}`))
        })
        .catch(error => console.error(`Error reading from ${src}:${error.message}`))



}

fileCopy('big.txt', 'big2.txt');
fileCopy('small.txt', 'small2.txt');
fileCopy('not-found.txt', 'notfound2.txt');