const {createReadStream, createWriteStream} = require('fs')


const showFile=(src)=>{

   let reader= createReadStream(src)
   

   reader
        .pipe(process.stdout)
        .on('close',()=>{
            console.log(`File copied successfully from ${src} to ${target}`)
        })
};


showFile('small.txt');  
