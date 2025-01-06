
function search(list, match) {

    let result = [];
    for (let item of list) {
        if (match(item))//check if item is a match
            result.push(item);
    }
    return result;
}

//not a good idea
function sort_on_key(list,key) {

    
    let size = list.length;

    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (list[i][key] > list[i + 1][key]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                sorted = false; //oh! my assumption was wrong
            }
        }
        size--;
    } while (!sorted);
  

    return list;
}

/**
 * 
 * @param {*} list  the list item to be sorted 
 * @param {*} isOrdered a function returning true if current pair of item is already in sorted order
 * @returns sorted list (same list) 
 */
function sort(list, isOrdered=(a,b)=> a<=b ) {

    
    let size = list.length;

    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (!isOrdered(list[i],list[i+1])) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                sorted = false; //oh! my assumption was wrong
            }
        }
        size--;
    } while (!sorted);
  

    return list;
}

Array.prototype.search=function(match){ return search(this,match);}

//Array comes with built-in sort function.
//now that sort function is replaced with my version of sort.
Array.prototype.sort=function(isOrdered=(a,b)=>a<b){ 
    console.debug('Using Bubble Sort');
    return sort(this,isOrdered);
}




try{
    module.exports={
        search,
        sort
    }
}catch(e){
    
}