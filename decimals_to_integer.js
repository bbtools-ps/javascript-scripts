// Overcoming Javascript precision issues when trying to add or subtract two numbers with decimal spaces because of the double floating point. This is made for the UI so that the user has better representation of the numbers.

// Function for counting decimal spaces from the number. Returns: number
const countDecimalSpaces = (num) => {
    // Convert num to string
    let str = num.toString();
    // Check if there are any decimals in the string
    if (/\./.test(num)) {
        return str.split('.')[1].length;
    } else {
        return 0;
    }
}

// Function for converting numbers with decimal spaces to integers. Returns: number
const convertDecimalsToInteger = (num, decimals, maxDecimals) => {
    if (num % 1 === 0) {
        return num * (maxDecimals / decimals);
    } else {
        return convertDecimalsToInteger(num * 10, decimals * 10, maxDecimals);
    }
}

// Function for getting the max decimal divider. For example 0.1 it would be 10, 0.01 = 100,... Returns: number
const getMaxDecimalDivider = (result, num) => {
    if (num === 0) {
        return result;
    } else {
        return getMaxDecimalDivider(result * 10, num - 1);
    }
}

(function () {
    let a = 0.1;
    let b = 0.2;

    let maxDecimals = getMaxDecimalDivider(1, Math.max(countDecimalSpaces(a), countDecimalSpaces(b)));

    console.log(a + b);
    // Output: 0.30000000000000004
    console.log((convertDecimalsToInteger(a, 1, maxDecimals) + convertDecimalsToInteger(b, 1, maxDecimals)) / maxDecimals);
    // Output: 0.3
})();