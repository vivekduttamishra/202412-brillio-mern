

function bubbleSort(values){

    let size=values.length;

    for(let x=0;x<values.length;x++){ //looping for the size of array.
        //console.debug('sorting', values.toString());
        for(let i=0; i<size-1; i++){
            if(values[i]> values[i+1]){
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


function selectionSort(values){
    let size=values.length;
    //let sorted=false;
    for(let x=0;x<values.length;x++){
        //sorted=true;
        //console.debug('debug','sorting',values.toString());
        let max=0;
        for(let i=1;i<size;i++){
            if(values[i]>values[max]){
                max=i;
            }
        }

        //move max to last position
        //if max is not already on the last position.
        if(max!==size-1){
            let temp=values[size-1];
            values[size-1]=values[max];
            values[max]=temp;
            //sorted=false;
        }
        size--;

    }

    return values;
}

//bubbleSort(5,3,1,8,2); //not the requirement.

let numbers=[2,3,11,4,5,7, 8,9,10, 13];

//var result = bubbleSort(numbers);
var result =selectionSort(numbers);
console.log('sorted values',result.toString());
console.log('sorted values',numbers.toString());