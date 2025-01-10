let {tlog} = require('../utils')
let {timedRange} = require('./range')

let e = timedRange(1,10)
tlog('timed range started');

let result=[];

e
    .on('value', x=>result.push(x))
    .on('end', ()=>console.log('done',result))
    