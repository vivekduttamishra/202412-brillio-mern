

function doCountDown(max){

    let id=setInterval(()=>{
        console.log('counting',max);
        max--;
        if(max<0){
            clearInterval(id);
            console.log('Countdown completed');
        }
    },1000);

    //setTimeout(()=> clearInterval(id), 1000*max);

}

doCountDown(10);
