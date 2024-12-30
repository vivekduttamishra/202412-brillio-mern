
let value=0;
function increment(delta){
    value+=delta;
    return value;
}

console.log('increment(1)',increment(1));
console.log('increment(1)',increment(1));
console.log('increment(1)',increment(1));

console.log('increment(5)',increment(5));

value=100;

console.log('increment(10)',increment(10));
