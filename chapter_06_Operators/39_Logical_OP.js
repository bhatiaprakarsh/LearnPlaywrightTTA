// Logical operators are used to combine conditions.
// They return true or false based on the values involved.

let isStudent = true;
let hasFeePaid = true;
let isAdult = false;

// 1. && (AND) -> true only if both conditions are true
console.log(isStudent && hasFeePaid); // true
console.log(isStudent && isAdult);    // false

// 2. || (OR) -> true if at least one condition is true
console.log(isStudent || isAdult);    // true
console.log(isAdult || false);        // false

// 3. ! (NOT) -> reverses the boolean value
console.log(!isStudent);              // false
console.log(!isAdult);                // true

// Example with conditions
let age = 20;
let hasID = true;

let canEnter = age >= 18 && hasID;
console.log("Can enter:", canEnter); // true

let canGetDiscount = age >= 18 || hasID;
console.log("Can get discount:", canGetDiscount); // true
