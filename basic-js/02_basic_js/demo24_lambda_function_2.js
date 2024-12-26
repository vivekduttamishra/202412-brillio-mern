
let f1=function(){ console.log('arguments in f1()',arguments)}

let f2=()=> console.log('arguments in f2()',arguments)


f1(1,2,3,4);
f2(1,2,3,4);