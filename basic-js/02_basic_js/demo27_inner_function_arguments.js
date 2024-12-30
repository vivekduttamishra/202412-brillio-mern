function global(gParam){
    console.log(`gParam: ${gParam}\toParam=${oParam}\toLocal=${oLocal}`);
}

function outer(oParam){

    let oLocal = oParam*2;

    function inner(iParam){
        console.log(
            `iparam=${iParam}
             oparam=${oParam} 
             olocal=${oLocal}`);
    }
    if(oParam<0)
        return global;
    else
        return inner;
}

let x = outer(10); //closure scopes variables:  oParam=10, oLocal=20
let y = outer(1); // closure scopes variables: oParam=1, oLocal=2

x(5); //iParam=5, oParam=10, oLocal=20

y(10); //iParam=10, oParam=1, oLocal=2

let z= outer(-1);

console.log('z===global',z===global);

z(100); //gParam=100, oParam


