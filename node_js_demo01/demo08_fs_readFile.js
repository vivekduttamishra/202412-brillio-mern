const {readFile}=require('fs');


const printFileLength= file=>{
    console.log(`------- reading ${file} -----`);
    let start = new Date();
    readFile(file,(error,data)=>{
        
        console.log('-------')
        let end = new Date();
        if(error){
            console.log(`Error: ${error}`)
        }else{
            console.log(`${file} size: ${data.length/1024/1024} mb.`);

        }
        console.log(`Total time taken to read ${file} is ${end-start} ms`);    
        console.log('--------------------------------\n\n')
    });
    //process.stdout.write(data)


}

printFileLength('big.txt');
printFileLength('small.txt');
printFileLength('not-found.txt');