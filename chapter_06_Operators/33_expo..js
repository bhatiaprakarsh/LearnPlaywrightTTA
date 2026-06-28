// The exponentiation operator (**) raises a number to a power.
// It is a cleaner way to write powers instead of Math.pow().

let base = 2;
let power = 3;
let result = base ** power;
console.log(`${base}^${power} = ${result}`); // 8

let square = 5 ** 2;
let cube = 4 ** 3;
console.log("5^2 =", square); // 25
console.log("4^3 =", cube); // 64

let num = 2;
num **= 4;
console.log("num after **= 4 =", num); // 16
