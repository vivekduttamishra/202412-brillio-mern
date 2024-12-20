function printn(n){
    let count=Math.min(n, arguments.length-1)
    let output='';
    for(let i=0;i<count;i++){
        //console.log(arguments[i+1]);
        if(i>0)
            output+=", ";
        output+=arguments[i+1];
    }

    console.log(output);
}

printn(3, 2,8,9,10,11,4);
console.log('testing with 30'); 
printn(30, 2,8,9,10,11,4); 