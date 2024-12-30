

function bubbleSort(values){

    let size=values.length;
    
    let sorted=false; //assumption before start.

    while(!sorted){ //looping for the size of array.
        sorted=true; //assumption for inner loop
        //console.debug('sorting', values.toString());
        for(let i=0; i<size-1; i++){
            if(values[i]> values[i+1]){
                sorted=false; //contradiction.
                let temp=values[i];
                values[i]=values[i+1];
                values[i+1]=temp;
            }
        }
        
        size--; //now array to sort size reduced.
    }

    //console.log(values);
    return values;
}

//bubbleSort(5,3,1,8,2); //not the requirement.

let numbers=[2,3,11,4,5,7, 8,9,10, 13];

var result = bubbleSort(numbers);
console.log('sorted values',result.toString());
console.log('sorted values',numbers.toString());