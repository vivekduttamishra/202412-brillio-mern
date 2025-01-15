

let fs = require('fs').promises;
let {delay}=require('./utils');


const folder='temp';
const files=['big.txt', 'small.txt', 'small2.txt'];

async function verifyFiles(file1,file2){
    var data1=await fs.readFile(file1);
    var data2=await fs.readFile(file2);
    
    let result= data1.toString()===data2.toString();
    console.log(`${file1} and ${file2} are ${result? 'equal':'not equal'}`);
    return result;
}

async function batch(){
    try{
        // 1. Create a temp folder
        await fs.mkdir(folder);
        // 2. Copy big and small file in the temp folder
        let copyJobs=[];
        for(let file of files){
            let target=`${folder}/${file}`;
            copyJobs.push( fs.cp(file,target).then(()=>verifyFiles(file,target)));
 
        }
        // Delete the temp file and folder after 10 seconds
        await Promise.allSettled(copyJobs);
        await delay(10000);
        for(let file of files){
            let target=`${folder}/${file}`;
            await fs.rm(target);
            console.log(`deleted: ${target}`);
        }

        await fs.rmdir(folder);
        console.log('Temp folder deleted');
        
    }catch(e){
        
    }
}

batch();