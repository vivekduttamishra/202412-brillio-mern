function search(list, match,...params) {

    let result = [];
    for (let item of list) {
        if (match(item,...params))//check if item is a match
            result.push(item);
    }
    return result;
}

const inRange= (field,min,max)=> object=> object[field]>=min&&object[field]<=max;

const inclusiveRange = function(item, field, min, max){return  item[field]>=min && item[field]<=max}


const contains = (field,text)=> object => object[field].toString().toLowerCase().includes(text.toLowerCase());

const and = (...matchers) => object=>{

    for(let matcher of matchers){
        if(!matcher(object))
            return false;
    }
    return true;

}

const or = (...matchers) => object=>{
    for(let matcher of matchers){
        if(matcher(object))
            return true;
    }
    return false;
}

const not = matcher => object => !matcher(object);


Array.prototype.search= function (matcher,...params){ return search(this,matcher,...params) }


try{
    module.exports={
        search,
        inRange,
        and,
        or,
        not,
        contains,
        all:and,
        any:or,
        none:not,
        includes:contains,
        inclusiveRange
    }
}catch(e){
    //web application.
    //no harm done.
}