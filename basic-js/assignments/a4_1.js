

function inner(id,times){
    for(var i=0;i<times;i++){
        console.log(id,i);
    }
}

function outer(count,times){

    for(let i=0;i<count;i++){
        inner(i,times);
    }
}


outer(5,3);
console.log();
outer(3,5);