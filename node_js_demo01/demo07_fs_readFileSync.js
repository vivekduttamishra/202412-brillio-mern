const {readFileSync}=require('fs');


const printFileLength= file=>{
    console.log(`------- reading ${file} -----`);
    let start = new Date();
    try{
        let data =readFileSync(file);
        console.log(`${file} size: ${data.length/1024/1024} mb.`);
        
    }catch(error){
        console.log(`Error: ${error}`)
    }finally{
        let end = new Date();        
        console.log(`Total time taken to read ${file} is ${end-start} ms`);    
        console.log('--------------------------------\n\n')
    }
    //process.stdout.write(data)


}

printFileLength('big.txt');
printFileLength('small.txt');
printFileLength('not-found.txt');