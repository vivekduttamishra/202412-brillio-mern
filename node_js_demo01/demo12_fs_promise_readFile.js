//const {readFile}=require('fs');
const { readFile } = require('fs').promises;


const printFileLength = file => {
    console.log(`------- reading ${file} -----`);
    let start = new Date();
    readFile(file)
        .then(data => {
            console.log(`${file} size: ${data.length / 1024 / 1024} mb.`);
            
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
        .finally(()=>{
            let end = new Date();
            console.log(`Total time taken to read ${file} is ${end - start} ms`);
            console.log('--------------------------------\n\n')
        });
}

printFileLength('big.txt');
printFileLength('small.txt');
printFileLength('not-found.txt');