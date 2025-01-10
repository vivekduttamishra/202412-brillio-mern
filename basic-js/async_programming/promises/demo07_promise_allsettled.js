const {tlog} =require('../utils')

const makeAPromise = (time,result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{            
            if(time<0)
                return reject(new Error(`Invalid Input ${time} for ${result}`));
        },1);
        setTimeout(()=>resolve({result, finished:new Date().toLocaleTimeString()}),time);
    });
}

let promises=[
    makeAPromise(10000, 'Hello'),
    makeAPromise(1000, 'World'),
    makeAPromise(-1,'WRONG PROMISE'),
    makeAPromise(3000, 'Bye'),
    makeAPromise(-4,'ANOTHER WRONG PROMISE')
]

let completed = Promise.allSettled(promises);

completed
    .then( results=> tlog('settled',results))
    .catch(err=> tlog("Promise Rejected",err))

tlog('Waiting for all tasks to complete');