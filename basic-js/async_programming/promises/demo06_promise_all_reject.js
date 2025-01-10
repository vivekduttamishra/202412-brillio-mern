const {tlog} =require('../utils')

const makeAPromise = (time,result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{            
            if(time<0)
                return reject(new Error(`Invalid Input ${time}`));
        },1);
        setTimeout(()=>resolve({result, finished:new Date().toLocaleTimeString()}),time);
    });
}

let promises=[
    makeAPromise(10000, 'Hello'),
    makeAPromise(1000, 'World'),
    makeAPromise(-1,'WRONG PROMISE'),
    makeAPromise(3000, 'Bye')
]

let completed = Promise.all(promises);

completed
    .then( results=> tlog(results))
    .catch(err=> tlog("Promise Rejected",err))

tlog('Waiting for all tasks to complete');