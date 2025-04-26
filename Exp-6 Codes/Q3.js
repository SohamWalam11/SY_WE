// app.js

// Import the enhanced math module
const lib = require('./lib');  // Import the lib module

// Use the functions from the lib module

// Addition
console.log(`10 + 5 = ${lib.add(10, 5)}`);

// Subtraction
console.log(`10 - 5 = ${lib.subtract(10, 5)}`);

// Multiplication
console.log(`10 * 5 = ${lib.multiply(10, 5)}`);

// Division
console.log(`10 / 5 = ${lib.divide(10, 5)}`);
console.log(`10 / 0 = ${lib.divide(10, 0)}`);  // Division by zero

// Power
console.log(`2^3 = ${lib.power(2, 3)}`);

// Square root
console.log(`Square root of 16 = ${lib.sqrt(16)}`);
console.log(`Square root of -4 = ${lib.sqrt(-4)}`);  // Negative number

// Factorial
console.log(`Factorial of 5 = ${lib.factorial(5)}`);
console.log(`Factorial of -5 = ${lib.factorial(-5)}`);  // Negative number

// Absolute value
console.log(`Absolute value of -7 = ${lib.abs(-7)}`);

// Rounding
console.log(`Round 4.6 = ${lib.round(4.6)}`);
console.log(`Round 4.3 = ${lib.round(4.3)}`);

// Exponential function
console.log(`e^2 = ${lib.exp(2)}`);

// Logarithm
console.log(`Natural log of 10 = ${lib.log(10)}`);
console.log(`Natural log of -1 = ${lib.log(-1)}`);  // Invalid log