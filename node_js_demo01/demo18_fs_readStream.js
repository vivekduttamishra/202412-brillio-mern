const {createReadStream}=require('fs');

const readFile=(file)=>{

    let data='';
    let reader= createReadStream(file);
    let size=0;
    let readCount=0;
    let start=new Date();
    reader
        .on('data', buffer=>{
            let newData=buffer.toString();
            //data+=newData;
            size+=newData.length;
            readCount++;
            //console.log(`${file} #${readCount} :${newData.length} bytes `)
        })
        .on('end',()=>{
            //process.stdout.write(data);
            let end=new Date();
            //console.log('-----')
            console.log(`Total time taken to read file ${file}: ${size} byte (${readCount} iteration) is ${end-start} ms`);
        });


}

readFile('big.txt');
readFile('small.txt');



