// Function for repeating the string for a given multiplier
function stringRepeat(str, multiplier) {
    let result = "";

    for (let i = 0; i < multiplier; i++) {
        result += str;
    }

    return result;
}

// Function for converting arabic numbers to roman numbers
function convertToRoman(num) {
    let numbers = [
        {
            value: 1,
            roman: "I"
        },
        {
            value: 4,
            roman: "IV"
        },
        {
            value: 5,
            roman: "V"
        },
        {
            value: 9,
            roman: "IX"
        },
        {
            value: 10,
            roman: "X"
        },
        {
            value: 40,
            roman: "XL"
        },
        {
            value: 50,
            roman: "L"
        },
        {
            value: 90,
            roman: "XC"
        },
        {
            value: 100,
            roman: "C"
        },
        {
            value: 400,
            roman: "CD"
        },
        {
            value: 500,
            roman: "D"
        },
        {
            value: 900,
            roman: "CM"
        },
        {
            value: 1000,
            roman: "M"
        }
    ],
        result = "";

    for (let i = numbers.length - 1; i >= 0; i--) {
        // Calculate the quotent by rounding it to the floor
        let quotent = Math.floor(num / numbers[i].value);
        // Create the result by adding the strings using the custom function for a string repeat
        result += stringRepeat(numbers[i].roman, quotent);

        // Create the result by adding the strings using the string.repeat() function. ES2015
        // result += numbers[i].roman.repeat(quotent);

        // Reduce the number by subtracting the (quotent * numbers[i].value)
        num -= quotent * numbers[i].value;
    }

    return result;
}

console.log(convertToRoman(4));