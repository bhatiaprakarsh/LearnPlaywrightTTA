let a = 10; // Global variable or global scope
console.log(a); // Output: 10

// let a = 20; cannot redeclare 'a' in the same scope
// This will throw an error because 'a' has already been declared in the same scope

a= 20; // Reassigning the global variable coz reassigning is allowed with let
console.log(a); // Output: 20


//block scope is the scope within a pair of curly braces {}, if, for, while, etc. are examples of block scope

function testLet() {
    let a = 30; // Local variable
    console.log(a); // Output: 30
}
testLet();
console.log(a); // Output: 20

