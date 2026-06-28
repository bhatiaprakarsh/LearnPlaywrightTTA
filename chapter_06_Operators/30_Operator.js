// explain operators in javascript with examplesIn JavaScript, operators are special symbols or keywords that perform operations on one or more operands (values or variables). They can be categorized into several types, including arithmetic, assignment, comparison, logical, and more. Below are some common operators in JavaScript along with examples:

// 1. **Arithmetic Operators**: These operators are used to perform mathematical calculations.
// Example:
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus

//2. **Compound Assignment Operators**: These operators are used to assign values to variables.
// Example:
let x = 10; // Assignment
x += 5; // Addition assignment
x -= 3; // Subtraction assignment
x *= 2; // Multiplication assignment
x /= 4; // Division assignment
x %= 3; // Modulus assignment

//3. **Comparison Operators**: These operators are used to compare two values and return a boolean result (true or false).
// Example:
let num1 = 10;
let num2 = 5;
let isEqual = num1 === num2; // Equality
let isNotEqual = num1 !== num2; // Inequality
let isGreater = num1 > num2; // Greater than
let isLess = num1 < num2; // Less than
let isGreaterOrEqual = num1 >= num2; // Greater than or equal
let isLessOrEqual = num1 <= num2; // Less than or equal

//4. **Logical Operators**: These operators are used to combine multiple boolean expressions.
// Example:
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // Logical AND
let orResult = isTrue || isFalse; // Logical OR
let notResult = !isTrue; // Logical NOT

//5. **Ternary Operator**: This operator is a shorthand for an if-else statement.
// Example:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary operator
console.log(canVote); // Output: Yes

//6. **Type Operators**: These operators are used to check the type of a variable or value.
// Example:
let str = "Hello";
let num = 42;
console.log(typeof str); // Output: string
console.log(typeof num); // Output: number

//7. **Bitwise Operators**: These operators perform bit-level operations on binary representations of numbers.
// Example:
let bitA = 5; // Binary: 0101
let bitB = 3; // Binary: 0011
let bitAnd = bitA & bitB; // Bitwise AND
let bitOr = bitA | bitB; // Bitwise OR
let bitXor = bitA ^ bitB; // Bitwise XOR

//8. **String Operators**: The `+` operator can also be used to concatenate strings.
// Example:
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2; // String concatenation
console.log(greeting); // Output: Hello, World!

//9. **Unary Operators**: These operators operate on a single operand.
// Example:
let num3 = 10;
let incremented = ++num3; // Increment operator
let decremented = --num3; // Decrement operator
let negated = -num3; // Negation operator

//10. **Comma Operator**: This operator allows multiple expressions to be evaluated in a single statement, returning the value of the last expression.
// Example:
let x1 = (1, 2, 3); // The value of x1 will be 3
console.log(x1); // Output: 3

// 11. Modulus Assignment Operator: This operator combines the modulus operation with assignment.
// Example:
let num4 = 10;
num4 %= 3; // Equivalent to num4 = num4 % 3
console.log(num4); // Output: 1

// 12. Exponentiation Operator: This operator is used to raise a number to the power of another number.
// Example:
let base = 2;
let exponent = 3;
let power = base ** exponent; // Equivalent to Math.pow(base, exponent)
console.log(power); // Output: 8