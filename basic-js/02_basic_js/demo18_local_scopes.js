function f1(){

    for(let i=0;i<3;i++){
        var a=0;
        let b=0;
        a++;
        b++;
        console.log(`In for loop i=${i}\ta=${a}\tb=${b}`)
    }

    console.log(`After for loop a=${a}`)
    console.log(`After for loop i=${i}`)
    console.log(`After for loop b=${b}`)

}

f1();