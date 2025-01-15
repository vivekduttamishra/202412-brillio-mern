const {createReadStream, createWriteStream}=require('fs');

const copyFile=(src,target)=>{

    
    let size=0;
    let readCount=0;
    let start=new Date();



    let reader= createReadStream(src);
    let writer = createWriteStream(target);

    let done=false;
    let buffer='';

    let ready=true;

    reader
        .on('data', buffer=>{
            let newData=buffer.toString();
            size+=newData.length;
            readCount++;
            //process.stdout.write(`R[${newData.length}]\n `);
            if(ready){
                //first read means writeable hasn't started yet
                process.stdout.write(`W[${newData.length}]\n `);
                writer.write(newData.toString());
                ready=false;
            } else{
                //we will keep data in memory till writeable becomes ready.
                buffer+=newData.toString();
                
            }



        })
        .on('error',err=>{
            console.error(`RError: ${err}`);
            done=true;
            writer.close();
        })
        .on('end',()=>{
            process.stdout.write(`RX `);
           done=true;
        });


    writer.on('drain',()=>{
        //I am ready to consume more
        console.log('W buffer',buffer.length);
        
        if(done){
            process.stdout.write(`WX`);
            writer.close(); //job completed.            
            return;
        }

        ready=true;
        // process.stdout.write(`W[${buffer.length}]\t`);
        // writer.write(buffer);
        // buffer=''; //clear the buffer as we have consume it.
    })
    .on('error', error=>console.error("WError:",error))
    .on('close',()=>{
        console.log('file copied successfully');
    })

}

copyFile('big.txt','big2.txt');



