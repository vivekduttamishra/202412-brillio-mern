
let badJobId=setTimeout(()=>{

    console.log('JavaScript is going to Die soon...');

},5000);


//setTimeout will schedule a job to run after 2seconds and returns immediately.
setTimeout(()=>{
    //we run this function after 2 seconds
    console.log("Don't worry. Java Script will live forever");
    clearTimeout(badJobId); //clear the job that was scheduled with setTimeout
},2000);

//we reach this line immediately
console.log('Please stand by for special announcement');

