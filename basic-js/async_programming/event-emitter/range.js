const EventEmitter = require('events');

function timedRange(min,max){

    let event = new EventEmitter();
    event.emit('starting');
    const iid=setInterval(function(){

        event.emit('value', min);
        min++;
        if(min===max){
            clearInterval(iid);
            event.emit('end');
        }
    },1000);

    return event;

}

module.exports = {
    timedRange
}