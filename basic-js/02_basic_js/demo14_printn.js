function printn(values,n=values.length){
    n=Math.min(n,values.length);
    let output=""
    for(let i=0;i<n;i++){
        if(i>0)
            output+=", ";
        output+=values[i];
    }
    console.log(output);
}

printn([1,2,3,4,5,6,7,8,9,10],3);
printn([1,2,3,4,5,6,7,8,9,10],30);
printn([1,2,3,4,5,6,7,8,9,10]);
