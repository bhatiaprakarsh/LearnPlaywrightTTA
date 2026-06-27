//template literals
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.


//playwright code using template literals
// Example: Using template literals for a dynamic URL
const baseUrl = 'https://example.com';
const userId = 12345;
const dynamicUrl = `${baseUrl}/user/${userId}`;
console.log(dynamicUrl); // Output: https://example.com/user/12345