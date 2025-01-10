module.exports={
    tlog:function (...message){
        console.log(new Date().toLocaleTimeString(),...message);
    }
}