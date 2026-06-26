// explain const in JavaScript, `const` is a keyword used to declare variables that are meant to be constant, meaning their values cannot be reassigned after they are initialized. However, it's important to note that while the variable itself cannot be reassigned, 

// if the variable holds an object or an array, the contents of that object or array can still be modified.

//const is block-scoped, which means it is only accessible within the block in which it is defined. This is different from `var`, which is function-scoped.

//const cannot be redeclared within the same scope
//const cannot be reassigned

const baseUrl = "https://api.example.com";
baseUrl = "https://api.newexample.com"; // This will throw an error because baseUrl is a constant and cannot be reassigned.
//typeError: Assignment to constant variable.

let name = "John Doe";
name = "Jane Doe"; // This is allowed because 'name' is declared with 'let', which allows reassignment.

//difference bettween var, let and const in tabular form:

// | Feature          | var                     | let                         | const                |
// |------------------|-------------------------|-----------------------------|----------------------|
// | Scope            | Function-scoped         | Block-scoped                | Block-scoped         |
// | Redeclaration    | Allowed                 | Not allowed                 | Not allowed          |
// | Reassignment     | Allowed                 | Allowed                     | Not allowed          |
// | Hoisting         | Hoisted with undefined  | Hoisted but not initialized | Hoisted but not initialized |

//1. var is function-scoped, while let and const are block-scoped.
//2. var can be redeclared and reassigned, while let can be reassigned but not redeclared in the same scope, and const cannot be redeclared or reassigned.
//3. var is hoisted to the top of its scope and initialized with undefined, while let and const are hoisted but not initialized, leading to a "temporal dead zone" until they are declared.


