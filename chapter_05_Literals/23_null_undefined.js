// null vs undefined in JavaScript

// undefined means a variable has been declared but not assigned a value.
let a;
console.log(a); // undefined

// null means a variable has been explicitly assigned to have no value.
let b = null;
console.log(b); // null

// Differences:
// 1. Type
console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (this is a historical JavaScript quirk)

// 2. Assignment
let c = undefined; // explicit undefined assignment
let d = null;      // explicit no-value assignment

// 3. Use cases
// - undefined: usually means a value is missing or not yet assigned.
// - null: used intentionally to indicate "no value" or "empty object reference".

// 4. Equality
console.log(a == b);  // true  (loose equality)
console.log(a === b); // false (strict equality)

// 5. Default values and function returns
function getValue(flag) {
  if (flag) {
    return "hello";
  }
  return null; // explicitly no value
}

console.log(getValue(true));  // "hello"
console.log(getValue(false)); // null

// 6. Property access on null/undefined causes errors
const obj = {};
console.log(obj.prop); // undefined
// console.log(obj.prop.name); // TypeError: Cannot read properties of undefined

// Summary:
// - undefined is the default uninitialized value for variables and missing properties.
// - null is an explicit assignment representing "no value".
// - Use strict equality (===) to distinguish them reliably.
