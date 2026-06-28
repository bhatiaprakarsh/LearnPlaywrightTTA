// Comparison operators compare values and return true or false.
// They are often used in conditions and loops.

let a = 10;
let b = 20;
let c = "10";

// 1. == : loose equality (compares values only)
console.log(a == c);   // true

// 2. === : strict equality (compares value and type) compare value and type
console.log(a === c);  // false

// 3. > : greater than
console.log(b > a);   // true

// 4. < : less than
console.log(a < b);   // true

// 5. >= : greater than or equal to
console.log(a >= 10); // true

// 6. <= : less than or equal to
console.log(b <= 10); // false

// 7. ! : logical NOT
console.log(!true);   // false

// 8. != : not equal (loose comparison)
console.log(a != c);   // false

// 9. !== : not strictly equal
console.log(a !== c);  // true
