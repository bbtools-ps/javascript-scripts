const decimalsToInteger = (num, decimals) => {
    if (num % 1 === 0) {
        return num * (100000000000000000 / decimals);
    } else {
        return decimalsToInteger(num * 10, decimals * 10);
    }
}

let a = 0.1;
let b = 0.2;

// Overcoming Javascript precision issues when trying to add two numbers with decimal spaces because of the double floating point precision

console.log(a + b);
// Output: 0.30000000000000004
console.log((decimalsToInteger(a, 1) + decimalsToInteger(b, 1)) / 100000000000000000);
// Output: 0.3