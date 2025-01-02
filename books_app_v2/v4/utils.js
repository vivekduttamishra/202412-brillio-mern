
function search(list, match) {

    let result = [];
    for (let item of list) {
        if (match(item))//check if item is a match
            result.push(item);
    }
    return result;
}

try{
    module.exports={
        search
    }
}catch(e){
    
}