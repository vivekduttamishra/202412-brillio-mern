const {createReadStream, createWriteStream} = require('fs')


const copyFile=(src,target)=>{

   let reader= createReadStream(src)
   let writer= createWriteStream(target)

   reader
        .pipe(writer)
        .on('close',()=>{
            console.log(`File copied successfully from ${src} to ${target}`)
        })
};

copyFile('big.txt','big3.txt');

