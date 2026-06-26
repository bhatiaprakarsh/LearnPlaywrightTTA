// ==========================================
// VAR, LET, and CONST in JavaScript
// ==========================================

// ==================================================
// 1. VAR - Function Scoped (ES5)
// ==================================================

console.log("========== VAR ==========");

// Example 1: Basic var declaration
var name = "John";
console.log(name); // Output: John

// Example 2: VAR - Redeclare (allowed)
var name = "Alice";
console.log(name); // Output: Alice - Redeclared successfully

// Example 3: VAR - Reassign (allowed)
var age = 25;
age = 30;
console.log(age); // Output: 30 - Reassigned successfully

// Example 4: VAR - Function Scope
function testVarScope() {
    if (true) {
        var city = "New York"; // var is function scoped, not block scoped
    }
    console.log(city); // Output: New York (accessible outside the if block)
}
testVarScope();

// Example 5: VAR - Hoisting (moves to top of function)
console.log("Before declaration:", country); // Output: undefined (hoisted but not initialized)
var country = "USA";
console.log("After declaration:", country); // Output: USA


// ==================================================
// 2. LET - Block Scoped (ES6)
// ==================================================

console.log("\n========== LET ==========");

// Example 1: Basic let declaration
let city = "London";
console.log(city); // Output: London

// Example 2: LET - Redeclare NOT allowed (Error if uncommented)
// let city = "Paris"; // This will throw SyntaxError: Identifier 'city' has already been declared

// Example 3: LET - Reassign (allowed)
let temperature = 25;
temperature = 30;
console.log(temperature); // Output: 30 - Reassigned successfully

// Example 4: LET - Block Scope
function testLetScope() {
    if (true) {
        let state = "California"; // let is block scoped
    }
    // console.log(state); // This would throw ReferenceError (uncomment to test)
}
testLetScope();

// Example 5: LET - Block Scope in Loop
for (let i = 0; i < 3; i++) {
    console.log("Loop iteration:", i);
}
// console.log(i); // ReferenceError: i is not defined (i only exists inside the loop)

// Example 6: LET - Hoisting (Temporal Dead Zone)
// console.log(product); // ReferenceError: Cannot access 'product' before initialization
let product = "Laptop";
console.log(product); // Output: Laptop


// ==================================================
// 3. CONST - Block Scoped, Cannot be Reassigned (ES6)
// ==================================================

console.log("\n========== CONST ==========");

// Example 1: Basic const declaration
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Example 2: CONST - Reassign NOT allowed (Error if uncommented)
// PI = 3.14; // This will throw TypeError: Assignment to constant variable

// Example 3: CONST - Redeclare NOT allowed (Error if uncommented)
// const PI = 3.14; // This will throw SyntaxError

// Example 4: CONST - Objects and Arrays CAN be modified
const person = { name: "Bob", age: 28 };
person.age = 29; // Allowed - modifying object properties
console.log(person); // Output: { name: 'Bob', age: 29 }

const colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Allowed - modifying array elements
console.log(colors); // Output: [ 'Red', 'Green', 'Blue', 'Yellow' ]

// Example 5: CONST - But cannot reassign the variable itself
// person = { name: "Charlie" }; // TypeError: Assignment to constant variable
// colors = ["Purple"]; // TypeError: Assignment to constant variable

// Example 6: CONST - Block Scope
function testConstScope() {
    if (true) {
        const region = "Europe"; // const is block scoped
    }
    // console.log(region); // ReferenceError (uncomment to test)
}
testConstScope();


// ==================================================
// 4. SCOPE - Global, Function, and Block Scope
// ==================================================

console.log("\n========== SCOPE EXPLANATION ==========");

// GLOBAL SCOPE - Accessible everywhere
var globalVar = "Global Var";
let globalLet = "Global Let";
const globalConst = "Global Const";

console.log("Global scope - var:", globalVar);
console.log("Global scope - let:", globalLet);
console.log("Global scope - const:", globalConst);

// FUNCTION SCOPE
function myFunction() {
    // Local scope - only accessible inside this function
    var localVar = "Local Var";
    let localLet = "Local Let";
    const localConst = "Local Const";
    
    console.log("Function scope - var:", localVar);
    console.log("Function scope - let:", localLet);
    console.log("Function scope - const:", localConst);
    
    // Can access global scope from inside function
    console.log("Accessing global from function:", globalVar);
}

myFunction();

// BLOCK SCOPE - let and const are block scoped
{
    var blockVar = "Block Var";
    let blockLet = "Block Let";
    const blockConst = "Block Const";
    
    console.log("Inside block - var:", blockVar);
    console.log("Inside block - let:", blockLet);
    console.log("Inside block - const:", blockConst);
}

console.log("Outside block - var:", blockVar); // Output: Block Var (var is NOT block scoped)
// console.log("Outside block - let:", blockLet); // ReferenceError (let is block scoped)
// console.log("Outside block - const:", blockConst); // ReferenceError (const is block scoped)


// ==================================================
// 5. REDECLARE - Declaring same variable again
// ==================================================

console.log("\n========== REDECLARE ==========");

// VAR - Can be redeclared
var fruit = "Apple";
console.log("First var declaration:", fruit); // Output: Apple
var fruit = "Banana";
console.log("Redeclared var:", fruit); // Output: Banana

// LET - Cannot be redeclared in same scope
let animal = "Cat";
console.log("First let declaration:", animal); // Output: Cat
// let animal = "Dog"; // SyntaxError: Identifier 'animal' has already been declared

// CONST - Cannot be redeclared
const planet = "Earth";
console.log("First const declaration:", planet); // Output: Earth
// const planet = "Mars"; // SyntaxError: Identifier 'planet' has already been declared

// LET in different block scope (allowed)
if (true) {
    let number = 10;
    console.log("Let in first block:", number);
}
if (true) {
    let number = 20; // Allowed - different block scope
    console.log("Let in second block:", number);
}


// ==================================================
// 6. REASSIGN - Changing value of variable
// ==================================================

console.log("\n========== REASSIGN ==========");

// VAR - Can be reassigned
var score = 100;
console.log("Initial var:", score); // Output: 100
score = 150;
console.log("Reassigned var:", score); // Output: 150

// LET - Can be reassigned
let count = 5;
console.log("Initial let:", count); // Output: 5
count = 10;
console.log("Reassigned let:", count); // Output: 10

// CONST - Cannot be reassigned (if primitive value)
const MAX_USERS = 100;
console.log("Initial const:", MAX_USERS); // Output: 100
// MAX_USERS = 200; // TypeError: Assignment to constant variable

// CONST - Can modify object/array contents (but not reassign the variable)
const user = { username: "john_doe", score: 50 };
user.score = 75; // Allowed - modifying object property
console.log("Modified object:", user); // Output: { username: 'john_doe', score: 75 }

// user = { username: "jane_doe" }; // TypeError - Cannot reassign const


// ==================================================
// 7. COMPARISON TABLE
// ==================================================

console.log("\n========== COMPARISON ==========");
console.log(`
╔════════════╦═════════════════╦═════════╦═══════════╦═══════════╗
║ Feature    ║ Scope           ║ Redeclare║ Reassign  ║ Hoisting  ║
╠════════════╬═════════════════╬═════════╬═══════════╬═══════════╣
║ VAR        ║ Function        ║ ✓ Yes   ║ ✓ Yes     ║ ✓ (undefi)║
║ LET        ║ Block           ║ ✗ No    ║ ✓ Yes     ║ ✗ (TDZ)   ║
║ CONST      ║ Block           ║ ✗ No    ║ ✗ No      ║ ✗ (TDZ)   ║
╚════════════╩═════════════════╩═════════╩═══════════╩═══════════╝
`);

// ==================================================
// 8. PRACTICAL EXAMPLES
// ==================================================

console.log("\n========== PRACTICAL EXAMPLES ==========");

// Example 1: Loop variable scoping
console.log("\n--- Loop Variable Scoping ---");
console.log("Using var in loop:");
for (var j = 0; j < 3; j++) {
    // j is function scoped
}
console.log("After loop with var, j =", j); // Output: 3 (j still accessible)

console.log("\nUsing let in loop:");
for (let k = 0; k < 3; k++) {
    // k is block scoped
}
// console.log("After loop with let, k =", k); // ReferenceError: k is not defined

// Example 2: Closures and scope
console.log("\n--- Closures ---");
function createCounter() {
    let count = 0; // Local scope - persists in closure
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("First call:", counter()); // Output: 1
console.log("Second call:", counter()); // Output: 2
console.log("Third call:", counter()); // Output: 3

// Example 3: When to use what
console.log("\n--- Best Practices ---");
console.log("✓ Use CONST by default - safer, prevents accidental reassignment");
console.log("✓ Use LET when you need to reassign - block scoped, safer than var");
console.log("✗ Avoid VAR - function scoped, causes confusion and bugs");

// Example: Best practice
const API_URL = "https://api.example.com"; // Constant values
let userData = null; // Values that will change
userData = { name: "Alice" }; // Reassign when needed
