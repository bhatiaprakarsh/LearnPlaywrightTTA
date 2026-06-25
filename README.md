# Learn Playwright TTA

A comprehensive JavaScript learning project covering basics, concepts, and identifiers/literals for Test Automation with Playwright.

---

## 📚 Course Overview

This repository contains structured JavaScript lessons organized into chapters, designed to build foundational knowledge for test automation with Playwright.

---

## 📖 Chapter Breakdown

### Chapter 01 - Basics

#### **01_Basic.js**
- Introduction to `console.log()` for output
- Simple string concatenation
- Variable declaration using `let` keyword
- Basic variable assignment and printing

**Key Points:**
```javascript
console.log("Prakarsh Bhatia Playwright");
let x = 10;
console.log("Value of x is: " + x);
```

#### **02_JS.js**
- Empty file - Reserved for future JS fundamentals

#### **03_JS_Commands.js**
- **Process Object** - Access to Node.js process information
- `process.platform` - Operating system platform
- `process.arch` - CPU architecture (x64, x32, etc.)
- `process.version` - Node.js version information

**Key Points:**
- Used for environment detection and system information
- Helpful in test automation for platform-specific testing

---

### Chapter 02 - JavaScript Concepts

#### **05_JS_Basics.js**
- Empty file - Reserved for JavaScript fundamentals

**Topics to Cover:**
- Data types (string, number, boolean, null, undefined)
- Operators (arithmetic, comparison, logical)
- Type coercion and type checking

---

### Chapter 03 - Identifier Literals

#### **06_Identifier_Rules.js**
- **Valid Identifier Rules for `var`:**
  - Can start with `$` (dollar sign) - `var $ = 10;`
  - Can start with `_` (underscore) - `var _a = 20;`
  - Can start with letters - `var p = 22;`
  - Can contain alphanumeric characters - `var abc123 = 123;`
  - Can use snake_case - `var prakarsh_bhatia = 25;`

- **Invalid Identifier Rules:**
  - ❌ Cannot start with numbers - `var 123 = 123;` (invalid)
  - ❌ Cannot start with numbers even with letters - `var 1stname = "John";` (invalid)
  - ❌ Cannot contain special characters like `@` - `var name@name = "John";` (invalid)
  - ❌ Cannot contain special characters like `#` - `var name#name = "John";` (invalid)

**Key Points:**
- Identifiers are names given to variables, functions, or objects
- JavaScript is case-sensitive
- Follow naming conventions for code readability

#### **07_Identifier_Part2.js**
- **Variable Declaration with `let`:**
  - `let` keyword for block-scoped variable declaration
  - Naming conventions: camelCase recommended
  - Valid: `let name = "John";`
  - Valid: `let firstName = "John";` (camelCase)
  - Valid: `let lastName = "Doe";`

- **Important Notes:**
  - ❌ Cannot redeclare with `let` in same scope - `let first_name = "John";` (can only declare once)
  - Variables should follow camelCase convention for consistency
  - `let` has block scope, unlike `var` which has function scope

**Key Points:**
- Modern JavaScript prefers `let` over `var`
- Proper identifier naming improves code maintainability
- Understanding scope is crucial for avoiding bugs

#### **08_Comments.js**
- Empty file - Reserved for Comments lesson

**Topics to Cover:**
- Single-line comments using `//`
- Multi-line comments using `/* */`
- Best practices for commenting code
- Self-documenting code principles

---

## 🎯 Learning Outcomes

After completing this course, you will understand:

1. ✅ Basic JavaScript syntax and console operations
2. ✅ Variable declaration with `var` and `let`
3. ✅ Identifier naming rules and conventions
4. ✅ Valid and invalid identifier patterns
5. ✅ Node.js process object and environment access
6. ✅ Code commenting and documentation
7. ✅ JavaScript best practices for test automation

---

## 🚀 How to Use

1. **Navigate through chapters** in order (Chapter 01 → Chapter 02 → Chapter 03)
2. **Run files** using Node.js:
   ```bash
   node chapter_01_Basics/01_Basic.js
   node chapter_01_Basics/03_JS_Commands.js
   ```
3. **Experiment** by modifying code and observing output
4. **Complete each file** before moving to the next chapter

---

## 📝 Quick Reference

### Variable Declarations
```javascript
var name = "John";           // Old way - function scoped
let firstName = "John";      // Modern - block scoped
const lastName = "Doe";      // Constant - cannot be changed
```

### Identifier Rules Summary
- **Valid starting characters:** Letters, `$`, `_`
- **Valid characters:** Alphanumeric, `$`, `_`
- **Invalid characters:** Numbers at start, `@`, `#`, spaces, special chars
- **Convention:** Use camelCase for variables and functions

### Process Object (Node.js)
```javascript
process.platform  // "win32", "linux", "darwin"
process.arch      // "x64", "ia32", "arm64"
process.version   // "v18.0.0" (example)
```

---

## 📂 Project Structure

```
LearnPlaywrightTTA/
├── chapter_01_Basics/
│   ├── 01_Basic.js
│   ├── 02_JS.js
│   └── 03_JS_Commands.js
├── chapter_02_JavaScript_Concepts/
│   └── 05_JS_Basics.js
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   └── 08_Comments.js
├── JavaScript/
└── README.md
```

---

## 💡 Tips for Learning

- Run each script and observe the output
- Modify the code and see how changes affect the output
- Try to break the rules intentionally to understand them better
- Practice writing your own identifiers following the rules
- Use meaningful variable names for clarity

---

## 🔗 References

- [MDN - JavaScript Identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
- [MDN - var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Node.js Process Documentation](https://nodejs.org/api/process.html)

---

## 📌 Progress Tracking

- [x] Chapter 01 - Basics (Covered)
- [ ] Chapter 02 - JavaScript Concepts (In Progress)
- [x] Chapter 03 - Identifier Literals (Partially Covered)
- [ ] Additional chapters (Coming soon)

---

**Happy Learning! 🎓**
