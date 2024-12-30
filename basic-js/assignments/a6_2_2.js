
function counter(value=0) {
    return function increment(delta = 1) {
        value += delta;
        return value;
    }
}

let c1 = counter(5);
console.log('c1(1)', c1(1));
console.log('c1(5)', c1(5));
console.log('c1(10)', c1(10));
console.log('c1(1)', c1(1));

//advantage #1. no one can temper with value. value is accessible only to increment not outside counter

//advantage #2. we can have mulitple counter each counting independently
let c2 = counter();
console.log('c2(5)', c2(5));
console.log('c1(5)', c1(5));
console.log('c2()', c2());
