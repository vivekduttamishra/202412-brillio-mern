

function printn(n, ...values){

    let count = Math.min(n, values.length);

    for(let i=0;i<count;i++){
        console.log(values[i]);
    }

}


//print first 3 values
printn(30, 2,8,9,10,11,4); //will print 2,8,9 