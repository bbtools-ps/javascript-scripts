# Javascript tests

Here is the list of various scripts written using javascript. They are made through the exploration of the language so you are free to use them as you wish.

## The list of scripts

1. [Roman numeral converter](#roman-numeral-converter)
2. [Palindrome checker](#palindrome-checker)
3. [Factorial](#factorial)
4. [Telephone checker](#telephone-checker)
5. [Decimals fix](#decimals-fix)
6. [Title case](#title-case)

## Details

### Roman numeral converter

Converts the Arabic numbers to roman and vice versa.
For converting from Arabic to roman use function *convertToRoman(num)* with the number as a parameter and for converting from roman to Arabic use function *convertToArabic(str)* with the string as a parameter that is passed to the function. Both functions return a number or a letter, depending on which function you use.

```
console.log(convertToRoman(3999));
// Expected output: MMMCMXCIX
console.log(convertToArabic("MMMCMXCIX"));
// Expected output: 3999
```

### Palindrome checker

Checks if a word or a sentence is a palindrome. A palindrome is a word or a sentence that's spelled the same way both forward and backward, ignoring the punctuation, case, and spacing. The function works by removing all non-alphanumeric characters (punctuation, spaces, and symbols) and turns everything into the same case (lower or upper case) to check for palindromes. The result of the function is a boolean (true or false) and it depends if the palindrome is found or not.

```
console.log(palindrome("1 eye for of 1 eye."));
// Expected output: true
```

### Factorial

Factorial is a function that calculates the factorial from a given number that is passed as a parameter.

```
console.log(factorial(10));
// Expected output: 3628800
```

### Telephone checker

Checks if a telephone number is in valid format. The parameter that is passed to the function is a string and the function returns a boolean as a result.

```
console.log(telephoneCheck("1 555)555-5555"));
// Expected output: false
console.log(telephoneCheck("1 555-555-5555"));
// Expected output: true
```

### Decimals fix

*Decimals fix* overcomes Javascript floating-point rounding errors issues when trying to add or subtract two numbers with decimal spaces. For example, 0.1 + 0.2 === 0.30000000000000004. This happens because all javascript numbers are double-precision floating-point, so to fix this we have to determine how many decimals spaces there are, multiply to convert numbers to integers, perform addition or subtraction, and then divide again to get the decimal point.

```
let a = 0.1;
let b = 0.2;
let maxDecimals = getMaxDecimalDivider(1, Math.max(countDecimalSpaces(a), countDecimalSpaces(b)));

console.log(a + b);
// Output: 0.30000000000000004
console.log((convertDecimalsToInteger(a, 1, maxDecimals) + convertDecimalsToInteger(b, 1, maxDecimals)) / maxDecimals);
// Output: 0.3
```

### Title case

The function that converts the string that is passed as a parameter to the title case.

```
let str = 'title  case here';

console.log(titleCase(str));
// Expected output: Title Case Here
```