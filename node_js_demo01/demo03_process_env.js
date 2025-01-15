
const show=(name)=>{
    if(name)
        console.log(name, process.env[name])
    else
        for(let key in process.env){
            console.log(key, process.env[key])
        }
}

(function(){

    show(process.argv[2]); //taks first argument.

})();