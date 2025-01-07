

const app=(function(){

    const result = document.getElementById('results');
    const minBox=document.getElementById('min');
    const maxBox=document.getElementById('max');
    let jobId=0;

    function createRow(id, min,max){
        let row=`
            <tr id='${id}' class='running'>
                <td>${id}</td>
                <td>${min}</td>
                <td>${max}</td>
                <td>calculating</td>
            </tr>        
        `

        result.innerHTML+=row;
    }

    function updateRow(id,primes){
        let row=document.getElementById(id);
        row.querySelector('td:nth-child(4)').textContent=primes;
        //row.children[4].innerHTML=primes;
        row.classList.remove('running');
        row.classList.add('done');
    }

    function handleFindPrimes(){
        let min=+minBox.value;
        let max=+maxBox.value;
        //console.log('findPrimes between',min,max);
        let id = ++jobId;
        createRow(id,min,max);   
    
        findPrimes(min,max,primes=>{
            updateRow(id,primes.length);
        });
    
    }


    //intialize the code
    minBox.value=2;
    maxBox.value=100;

    return {
     handleFindPrimes
    }   

})();