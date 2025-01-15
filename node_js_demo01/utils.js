

const delay = time => new Promise( resolve=>setTimeout(resolve,time));

// function delay(time){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(),time);
//     })
// }


module.exports={
    delay
}