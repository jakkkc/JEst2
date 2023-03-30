// function romanToDecimal(romanNumeral) {
//   // Convert the input to uppercase to reduce errors
//   romanNumeral = romanNumeral.toUpperCase();

//   // Initialize a hashmap for all possible letters in roman numerals
//   const romanValues = new Map([
//     ["M", 1000],
//     ["D", 500],
//     ["C", 100],
//     ["L", 50],
//     ["X", 10],
//     ["V", 5],
//     ["I", 1],
//   ]);

//   // Initialize variables
//   let total = 0;
//   let previousVal = 0;
//   let previousChar = "";
//   let consecutiveCount = 0;

//   // Loop through each character in the string
//   for (let i = 0; i < romanNumeral.length; i++) {
//     const currentChar = romanNumeral[i];

//     // Check if the character is valid
//     if (!romanValues.has(currentChar)) {
//       return -1;
//     }

//     const currentVal = romanValues.get(currentChar);

//     // Check for invalid repetitions
//     if (currentChar === previousChar) {
//       consecutiveCount++;
//       if (consecutiveCount >= 4) {
//         return -1;
//       }
//     } else {
//       consecutiveCount = 1;
//     }

//     // Subtractive rule - if the next value is greater than the current one
//     if (currentVal > previousVal && previousVal !== 0) {
//       total -= 2 * previousVal;
//     }

//     // Add or subtract the current value based on the comparison with previous value
//     if (currentVal >= previousVal) {
//       total += currentVal;
//     } else {
//       total -= previousVal;
//       total += currentVal;
//     }

//     // Set the previous value and character
//     previousVal = currentVal;
//     previousChar = currentChar;
//   }

//   // Return the total, or -1 if the input is invalid
//   return consecutiveCount >= 4 ? -1 : total;
// }

// console.log(romanToDecimal("XXV"));
// module.export = romanToDecimal;

function romanToDecimal(str) {
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let total = 0;
  let prev = 0;
  let current, currentStr;
  for (let i = 0; i < str.length; i++) {
    currentStr = str[i];
    current = romanNumerals[currentStr];
    if (!current) {
      return -1;
    }
    if (prev < current && prev !== 0) {
      const combinedStr = str[i - 1] + str[i];
      const combined = romanNumerals[combinedStr];
      if (combined) {
        total -= prev;
        current = combined;
        currentStr = combinedStr;
      } else {
        return -1;
      }
    }
    total += current;
    prev = current;
  }
  return total;
}
console.log(romanToDecimal("null"));
module.exports = romanToDecimal;
