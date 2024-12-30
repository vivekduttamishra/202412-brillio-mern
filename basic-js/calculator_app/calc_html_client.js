
presenter=result=>{
    document.write(`<p>${result}</p>`);
    console.log(result);
}

var htmlFormatter= (v1, opr, v2, result)=>`
    <div class='output'>
        <p>${v1} ${opr} ${v2}</p>
        <h2>${result}</h2>
    </div>
`

calculator(10, plus, 5,htmlFormatter); //10 plus 5 = 15
calculator(10, minus, 5,htmlFormatter); //10 minus 5 = 5

function mod(x,y) {return x%y;}

calculator(10, mod, 5, htmlFormatter); //10 mod 5 = 0

calculator(10, mod, 3, methodStyle);

calculator(10,mod,3, newraw);

