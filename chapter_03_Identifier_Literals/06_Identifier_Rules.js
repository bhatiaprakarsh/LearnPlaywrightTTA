// ============================================
// JAVASCRIPT IDENTIFIER RULES WITH EXAMPLES
// ============================================

// RULE 1: Identifier must start with a letter, underscore (_), or dollar sign ($)
// ────────────────────────────────────────────────────────────────────────────
console.log("RULE 1: Must start with letter, _, or $");

// VALID examples:
var p = 22;                   // Starts with letter 'p'
var name = "John";            // Starts with letter 'n'
var firstName = "Alice";      // Starts with letter 'f'
var _a = 20;                  // Starts with underscore '_'
var _privateVar = 100;        // Starts with underscore '_'
var $ = 10;                   // Starts with dollar sign '$'
var $price = 500;             // Starts with dollar sign '$'

// INVALID examples (commented out):
// var 123 = 123;              // INVALID - starts with number
// var 1stname = "John";       // INVALID - starts with number


// RULE 2: After first character, can contain letters, digits, underscores, or dollar signs
// ──────────────────────────────────────────────────────────────────────────────────────
console.log("RULE 2: Can contain letters, digits, _, $ after first character");

// VALID examples:
var abc123 = 123;             // Contains letters and digits
var user_name = "Bob";        // Contains underscore
var user$id = 50;             // Contains dollar sign
var firstName2 = "John";      // Contains letters and digits
var _user_123 = "test";       // Contains underscores and digits
var $price_100 = 999;         // Contains dollar sign, underscore, and digits


// RULE 3: CANNOT contain special characters like @, #, !, %, etc.
// ──────────────────────────────────────────────────────────────
console.log("RULE 3: Cannot contain special characters (@, #, !, %, etc)");

// VALID examples:
var nameValid = "John";       // Only letters
var user_id = 10;             // Only letters, underscore, digits
var $amount = 100;            // Dollar sign is allowed

// INVALID examples (commented out):
// var name@name = "John";     // INVALID - contains @
// var name#name = "John";     // INVALID - contains #
// var user-name = "Alice";    // INVALID - contains hyphen -
// var user name = "Bob";      // INVALID - contains space


// RULE 4: CANNOT contain spaces
// ─────────────────────────────
console.log("RULE 4: Cannot contain spaces");

// VALID examples (use camelCase or snake_case instead):
var prakarsh_bhatia = 25;     // Using snake_case (underscore between words)
var prakarshBhatia = 25;      // Using camelCase (capital letter for new word)

// INVALID examples (commented out):
// var prakarsh bhatia = 25;   // INVALID - contains space


// RULE 5: Case Sensitive - Different cases = Different variables
// ───────────────────────────────────────────────────────────────
console.log("RULE 5: Identifiers are CASE SENSITIVE");

// These are THREE different variables:
var name = "John";            // lowercase 'name'
var Name = "Alice";           // uppercase 'Name' - DIFFERENT variable
var NAME = "Bob";             // all uppercase 'NAME' - DIFFERENT variable

console.log(name);             // Output: John
console.log(Name);             // Output: Alice
console.log(NAME);             // Output: Bob


// RULE 6: Cannot be JavaScript reserved words
// ────────────────────────────────────────────
console.log("RULE 6: Cannot use reserved keywords");

// INVALID examples (commented out):
// var var = 10;               // INVALID - 'var' is reserved
// var let = 20;               // INVALID - 'let' is reserved
// var const = 30;             // INVALID - 'const' is reserved
// var function = () => {};    // INVALID - 'function' is reserved
// var return = 5;             // INVALID - 'return' is reserved
// var if = true;              // INVALID - 'if' is reserved

// VALID examples (not using reserved words):
var myVar = 10;               // Use 'myVar' instead of 'var'
var myLet = 20;               // Use 'myLet' instead of 'let'
var myConst = 30;             // Use 'myConst' instead of 'const'


// ============================================
// NAMING CONVENTIONS (BEST PRACTICES)
// ============================================

console.log("NAMING CONVENTIONS:");

// camelCase (recommended for variables)
var firstName = "John";
var lastName = "Doe";
var userAge = 25;
var isActive = true;

// snake_case (used in some conventions)
var first_name = "John";
var last_name = "Doe";
var user_age = 25;

// PascalCase (used for classes/constructors)
var UserProfile = {};
var StudentRecord = {};

// UPPER_CASE (used for constants)
var MAX_SIZE = 100;
var MIN_VALUE = 0;

console.log("All identifier rules demonstrated successfully!");




