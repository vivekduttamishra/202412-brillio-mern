

function factorial(n, cb) {

    let fn = 1;

    if (n < 0)
        return cb(new Error('Negative Number Not Allowed'));

    let iid = setInterval(() => {

        fn *= n;
        n--;

        if (n < 1) {
            clearInterval(iid);
            cb(null, fn)
        }

    }, 1000);

}

function permutation(n, r, cb) {

    setTimeout(() => {

        if (n < 0 || r < 0)
            return cb(new Error('Negative Number Not Allowed'));
        if (r > n)
            return cb(new Error('Invalid Range. Required n>r'));

        let fn, fn_r; //originally undefined.

        factorial(n, (_, result) => fn = result); //this result will come after n seconds
        //we reach here immediately
        factorial(n - r, (_, result) => fn_r = result) //this result will come after n-r seconds

        //we reach here immediately. not sure when the result will come.
        //we should wait.
        const iid = setInterval(() => {
            //check if other calculations are done
            if (fn && fn_r) {
                cb(null, fn / fn_r);
                clearInterval(iid);
            }
        }, 10);

    }, 1);

}




try {

    module.exports = {
        factorial: factorial,
        permutation
    }

} catch (e) {
    //web app
    //no harm done.
}