//explain hoisting in JavaScript, hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are actually declared in the code. However, it's important to note that only the declarations are hoisted, not the initializations.

// hoisting for var, let, and const in tabular form:

// | Feature          | var                     | let                         | const                |
// |------------------|-------------------------|-----------------------------|----------------------|
// | Hoisting         | Hoisted with undefined  | Hoisted but not initialized | Hoisted but not initialized |


console.log(x); // This will log undefined, because 'x' is hoisted and initialized with undefined
var x = 5; // 'x' is declared and initialized with the value 5
console.log(x); // This will log 5, the value of 'x' after initialization

// //behind the scenes, the code is interpreted as:
// var x; hoisted with undefined
// console.log(x); undefined
// x = 5; // 'x' is initialized with the value 5
// console.log(x); // This will log 5, the value of 'x' after initialization

//example 2
console.log(y);
var y = 10;
console.log(y);