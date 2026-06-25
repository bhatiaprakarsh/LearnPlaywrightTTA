// ============================================
// RULE 1: Can start with letter, underscore (_), or dollar sign ($)
// ============================================
var $ = 10;                      // ✓ Valid - starts with $
var _a = 20;                     // ✓ Valid - starts with _
var p = 22;                      // ✓ Valid - starts with letter
var _name = "John";              // ✓ Valid - starts with _
var $price = 100;                // ✓ Valid - starts with $
console.log("Rule 1 - Starting characters:", { $, _a, p, _name, $price });

// ============================================
// RULE 2: After first character, can contain letters, numbers, _, and $
// ============================================
var abc123 = 123;                // ✓ Valid - contains numbers
var _user_id = 101;              // ✓ Valid - contains _ and numbers
var $amount$Value = 500;         // ✓ Valid - contains $
var firstName123 = "Alice";      // ✓ Valid - mix of letters and numbers
var user_1st_name = "Bob";       // ✓ Valid - underscores and numbers
console.log("Rule 2 - Alphanumeric characters:", { abc123, _user_id, $amount$Value, firstName123, user_1st_name });

// ============================================
// RULE 3: CANNOT start with a number (INVALID)
// ============================================
// var 123 = 123;               // ✗ Invalid - starts with number
// var 1stname = "John";        // ✗ Invalid - starts with number (1)
// var 2ndValue = 50;           // ✗ Invalid - starts with number (2)
console.log("Rule 3 - Cannot start with numbers: (See commented examples above)");

// ============================================
// RULE 4: CANNOT contain spaces (INVALID)
// ============================================
// var prakarsh bhatia = 25;    // ✗ Invalid - contains space
// var user name = "John";      // ✗ Invalid - contains space
// var first last = 100;        // ✗ Invalid - contains space
console.log("Rule 4 - Cannot contain spaces: (See commented examples above)");

// ============================================
// RULE 5: CANNOT contain special characters like @, #, !, etc. (INVALID)
// ============================================
// var name@name = "John";      // ✗ Invalid - contains @
// var name#name = "John";      // ✗ Invalid - contains #
// var item-name = "test";      // ✗ Invalid - contains hyphen
// var user! = 10;              // ✗ Invalid - contains !
// var value% = 50;             // ✗ Invalid - contains %
// var total& = 100;            // ✗ Invalid - contains &
console.log("Rule 5 - No special characters except $ and _: (See commented examples above)");

// ============================================
// RULE 6: Case-sensitive (Different variables with different cases)
// ============================================
var name = "John";               // ✓ lowercase 'name'
var Name = "Alice";              // ✓ uppercase 'N' - Different variable!
var NAME = "Bob";                // ✓ all uppercase - Another different variable!
console.log("Rule 6 - Case sensitivity: name=" + name + ", Name=" + Name + ", NAME=" + NAME);
console.log("All three are DIFFERENT variables because of case sensitivity");

// ============================================
// RULE 7: Naming conventions - snake_case
// ============================================
var prakarsh_bhatia = 25;        // ✓ Valid - snake_case (underscore between words)
var user_age = 30;               // ✓ Valid - snake_case
var first_name = "John";         // ✓ Valid - snake_case
var last_name = "Doe";           // ✓ Valid - snake_case
console.log("Rule 7 - snake_case convention:", { prakarsh_bhatia, user_age, first_name, last_name });

// ============================================
// RULE 8: Naming conventions - camelCase (Recommended for JavaScript)
// ============================================
var prakarshBhatia = 25;         // ✓ Valid - camelCase (lowercase start, capital for new words)
var userName = "John";           // ✓ Valid - camelCase
var userAge = 30;                // ✓ Valid - camelCase
var firstName = "John";          // ✓ Valid - camelCase
var lastName = "Doe";            // ✓ Valid - camelCase
console.log("Rule 8 - camelCase convention (RECOMMENDED):", { prakarshBhatia, userName, userAge, firstName, lastName });

// ============================================
// RULE 9: CANNOT use hyphens or special characters (INVALID)
// ============================================
// var prakarsh-bhatia = 25;    // ✗ Invalid - contains hyphen
// var user-name = "John";      // ✗ Invalid - contains hyphen
// var first@name = "Alice";    // ✗ Invalid - contains @
console.log("Rule 9 - No hyphens or special chars: (See commented examples above)");

// ============================================
// Summary: Valid Identifier Examples
// ============================================
var validExample1 = "starts with letter";
var _validExample2 = "starts with underscore";
var $validExample3 = "starts with dollar";
var validExample123 = "contains numbers";
var valid_Example_Mix = "mixed case and underscore";
var validExampleCamelCase = "recommended JavaScript style";

console.log("\n✓ All examples above are VALID identifiers");
console.log("✗ All commented examples are INVALID identifiers");




