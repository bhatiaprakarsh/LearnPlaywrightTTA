// JavaScript string literals: backticks, single quotes, and double quotes

// 1. Backtick string literals (template literals)
const name = "Alice";
const age = 30;
const backtickString = `Hello, ${name}! You are ${age} years old.`;
const multilineBacktick = `This is line 1.
This is line 2.`;

// 2. Single-quote string literals
const singleQuoteString = 'Hello, world!';
const singleQuoteWithEscapes = 'It\'s easy to use single quotes with escapes.';

// 3. Double-quote string literals
const doubleQuoteString = "Hello, world!";
const doubleQuoteWithEscapes = "She said, \"Hello!\"";

// Notes:
// - Backticks support interpolation with ${expression} and multiline text.
// - Single and double quotes are functionally equivalent for plain strings.
// - Use escapes when the string contains the same quote character.

console.log(backtickString);
console.log(multilineBacktick);
console.log(singleQuoteString);
console.log(singleQuoteWithEscapes);
console.log(doubleQuoteString);
console.log(doubleQuoteWithEscapes);

//playwright code using backticks, single quotes, and double quotes
// Example: Using backticks for a dynamic URL
const baseUrl = 'https://example.com';
const userId = 12345;
const dynamicUrl = `${baseUrl}/user/${userId}`;
console.log(dynamicUrl); // Output: https://example.com/user/12345