// Function that calculates factorial from a given number !x = x * (x - 1) * ... 1
function factorial(num) {
  // Base case
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(10));
// Output: 3628800