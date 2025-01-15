const { readFile, writeFile } = require('fs').promises;


const fileCopy = async (src, target) => {
    console.log(`------- copying ${src} to ${target}-----`);
    let start = new Date();
    try{
        let data = await readFile(src);
        await writeFile(target, data);
        let end = new Date();
        console.log(`Total time taken to copy ${src} to ${target} is ${end - start} ms`);

    }catch(e){
        console.error('Error copy file:',e.message);
    }


}

fileCopy('big.txt', 'big2.txt');
fileCopy('small.txt', 'small2.txt');
fileCopy('not-found.txt', 'notfound2.txt');