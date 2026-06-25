// ============================================
// IDENTIFIER NAMING CONVENTIONS WITH 'let'
// ============================================

// ============================================
// camelCase (RECOMMENDED for JavaScript variables)
// ============================================
let firstName = "John";         // ✓ Valid - camelCase
let lastName = "Doe";           // ✓ Valid - camelCase
let userAge = 30;               // ✓ Valid - camelCase
let isActive = true;            // ✓ Valid - camelCase (boolean with 'is' prefix)
let totalPrice = 1500.50;       // ✓ Valid - camelCase
let getUserName = "function";   // ✓ Valid - camelCase (for function names)
let phoneNumber = "9876543210"; // ✓ Valid - camelCase
console.log("camelCase examples:", { firstName, lastName, userAge, isActive, totalPrice, phoneNumber });

// ============================================
// snake_case (Used in some coding conventions)
// ============================================
let first_name = "Alice";       // ✓ Valid - snake_case (underscore between words)
let last_name = "Smith";        // ✓ Valid - snake_case
let user_age = 25;              // ✓ Valid - snake_case
let is_active = true;           // ✓ Valid - snake_case
let total_price = 2000.75;      // ✓ Valid - snake_case
let phone_number = "1234567890"; // ✓ Valid - snake_case
let user_email_address = "alice@example.com"; // ✓ Valid - snake_case
console.log("snake_case examples:", { first_name, last_name, user_age, is_active, total_price, phone_number, user_email_address });

// ============================================
// PascalCase (Used for Classes/Constructors)
// ============================================
let UserName = "John";          // ✓ Valid - PascalCase (uppercase first letter)
let LastName = "Doe";           // ✓ Valid - PascalCase
let FirstName = "Alice";        // ✓ Valid - PascalCase
let UserProfile = {};           // ✓ Valid - PascalCase (for objects)
let ProductName = "Laptop";     // ✓ Valid - PascalCase
let IsActive = true;            // ✓ Valid - PascalCase
console.log("PascalCase examples:", { UserName, LastName, FirstName, UserProfile, ProductName, IsActive });

// ============================================
// UPPER_CASE (Used for Constants)
// ============================================
let MAX_SIZE = 100;             // ✓ Valid - UPPER_CASE (constants)
let MIN_VALUE = 0;              // ✓ Valid - UPPER_CASE
let PI_VALUE = 3.14159;         // ✓ Valid - UPPER_CASE
let DATABASE_URL = "localhost"; // ✓ Valid - UPPER_CASE
let API_KEY = "abc123xyz";      // ✓ Valid - UPPER_CASE
let TIMEOUT_MS = 5000;          // ✓ Valid - UPPER_CASE
console.log("UPPER_CASE (constants):", { MAX_SIZE, MIN_VALUE, PI_VALUE, DATABASE_URL, API_KEY, TIMEOUT_MS });

// ============================================
// Mixed Conventions
// ============================================
let _privateVariable = "secret"; // ✓ Valid - starts with underscore (convention for private)
let $jqueryElement = "element"; // ✓ Valid - starts with $ (convention for jQuery/DOM)
let __doubleUnderscore = "dunder"; // ✓ Valid - double underscore (convention for special)
let userID = 101;               // ✓ Valid - camelCase with acronym
let userId = 101;               // ✓ Valid - alternative camelCase
let user_id = 101;              // ✓ Valid - snake_case with acronym
console.log("Mixed conventions:", { _privateVariable, $jqueryElement, __doubleUnderscore, userID, userId, user_id });

// ============================================
// IMPORTANT: 'let' SCOPE AND REDECLARATION
// ============================================

// 'let' does NOT allow redeclaration in same scope
// This will cause ERROR:
// let name = "John";            // First declaration
// let name = "Jane";            // ✗ ERROR - Cannot redeclare 'let' variable

// These are comments showing what would be invalid:
// let first_name = "John";      // ✗ First declaration
// let first_name = "John";      // ✗ Invalid - Redeclaration in same scope
// let first_name = "John";      // ✗ Invalid - Redeclaration in same scope

// But in DIFFERENT scopes, 'let' can be redeclared:
if (true) {
    let scopedName = "Inside if block";
    console.log("Inside if block:", scopedName);
}
// Can use same name in different scope
if (true) {
    let scopedName = "Another if block";
    console.log("Another if block:", scopedName);
}

// ============================================
// BEST PRACTICES FOR NAMING
// ============================================

// ✓ GOOD Examples:
let userEmail = "user@example.com";     // Clear, descriptive, camelCase
let hasPermission = true;               // Boolean with 'has/is' prefix
let maxAttempts = 3;                    // Clear intent, camelCase
let calculateTotal = "function";        // Function-like name, camelCase

// ✗ BAD Examples (Avoid):
// let x = 10;                           // Too vague
// let temp = "value";                  // Unclear purpose
// let a = 20;                          // Single letter, not descriptive
// let theQuickBrownFoxJumpsOverTheLazyDog = "too long"; // Excessively long

console.log("\n✓ NAMING CONVENTIONS SUMMARY:");
console.log("- camelCase: Recommended for JavaScript variables and functions");
console.log("- snake_case: Used in databases and some frameworks");
console.log("- PascalCase: Used for Classes and Constructors");
console.log("- UPPER_CASE: Used for Constants");
console.log("- _prefix: Convention for private variables");
console.log("- $prefix: Convention for jQuery/DOM elements");
console.log("\n✗ Remember: 'let' does NOT allow redeclaration in same scope!");
