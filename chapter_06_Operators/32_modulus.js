// The modulus operator (%) returns the remainder of division.
// It is very useful for checking even/odd numbers.

let a = 10;
let b = 3;
let remainder = a % b;
console.log(`${a} % ${b} = ${remainder}`); // 10 % 3 = 1

let even = 20 % 2;
let odd = 21 % 2;
console.log("20 % 2 =", even); // 0
console.log("21 % 2 =", odd); // 1

let x = 15;
x %= 4;
console.log("x after %= 4 =", x); // 3
