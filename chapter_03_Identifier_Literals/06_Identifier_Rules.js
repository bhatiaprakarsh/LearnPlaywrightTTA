// ============================================
// JAVASCRIPT IDENTIFIER RULES
// ============================================

// Rule 1: Must start with a letter, underscore (_), or dollar sign ($)
var firstName = "John";       // VALID - starts with letter
var _age = 25;                // VALID - starts with underscore
var $price = 100;             // VALID - starts with dollar sign

// Rule 2: After the first character, can contain letters, digits, underscores, or dollar signs
var name1 = "John";           // VALID - contains digit
var user_name = "Alice";      // VALID - contains underscore
var item$price = 50;          // VALID - contains dollar sign
var abc123XYZ = "test";       // VALID - mix of letters and digits

// Rule 3: CANNOT start with a number
// var 1stname = "John";       // INVALID - starts with number
// var 123name = "John";       // INVALID - starts with number

// Rule 4: CANNOT contain spaces
// var first name = "John";    // INVALID - contains space
// var user name = "Alice";    // INVALID - contains space

// Rule 5: CANNOT contain special characters (except $ and _)
// var name@123 = "John";      // INVALID - contains @
// var user#id = 10;           // INVALID - contains #
// var item-name = "test";     // INVALID - contains hyphen
// var total! = 50;            // INVALID - contains !

// Rule 6: CANNOT be a reserved word (keywords)
// var var = 10;               // INVALID - 'var' is reserved
// var let = 20;               // INVALID - 'let' is reserved
// var const = 30;             // INVALID - 'const' is reserved
// var function = () => {};    // INVALID - 'function' is reserved
// var return = 5;             // INVALID - 'return' is reserved
// var if = true;              // INVALID - 'if' is reserved

// Rule 7: Identifiers are CASE SENSITIVE
var Name = "John";            // Different from 'name'
var name = "Alice";           // Different from 'Name'
var NAME = "Bob";             // Different from 'Name' and 'name'

// Rule 8: Can use camelCase (recommended for variables)
var firstName = "John";       // VALID - camelCase convention
var lastName = "Doe";         // VALID - camelCase convention
var userAge = 25;             // VALID - camelCase convention

// Rule 9: Can use snake_case (used in some conventions)
var first_name = "John";      // VALID - snake_case
var last_name = "Doe";        // VALID - snake_case
var user_age = 25;            // VALID - snake_case

// Rule 10: Can use PascalCase (used for classes/constructors)
var FirstName = "John";       // VALID - PascalCase
var LastName = "Doe";         // VALID - PascalCase
var UserProfile = {};         // VALID - PascalCase

// Rule 11: Can use UPPER_CASE with underscores (used for constants)
var MAX_SIZE = 100;           // VALID - UPPER_CASE
var MIN_VALUE = 0;            // VALID - UPPER_CASE
var PI_VALUE = 3.14159;       // VALID - UPPER_CASE

// Rule 12: Can contain multiple $ or _ symbols
var $_amount = 1000;          // VALID - contains $ and _
var __privateVar = "secret";  // VALID - starts with __
var $$ = 500;                 // VALID - only $ symbols

// ============================================
// REAL-WORLD EXAMPLES (ALL VALID)
// ============================================

var userName = "prakarsh";
var userEmail = "prakarsh@example.com";
var totalPrice = 1500.50;
var isActive = true;
var _internalId = 12345;
var $balance = 5000;
var user_id = 101;
var MAX_ATTEMPTS = 5;
var ProductName = "Laptop";

console.log("All valid identifiers created successfully!");

