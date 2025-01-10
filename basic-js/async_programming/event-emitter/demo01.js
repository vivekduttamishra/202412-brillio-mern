let {tlog} = require('../utils')
let {timedRange} = require('./range')

let e = timedRange(1,10)
tlog('timed range started');

e
    .on('value', x=>console.log(x))
    .on('end', ()=>console.log('done'))
    .on('error', err=>console.log('error',err))
    .on('foo',()=>console.log('fooooooo'));