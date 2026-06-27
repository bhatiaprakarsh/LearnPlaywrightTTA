// JavaScript Number Literals

// 1. Decimal literal (base 10)
const decimalValue = 123;
const decimalFloat = 3.14;
const decimalExponential = 1.23e4; // 12300

// 2. Binary literal (base 2)
const binaryValue = 0b1010; // 10 in decimal
const binaryBig = 0b11111111; // 255 in decimal

// 3. Octal literal (base 8)
const octalValue = 0o17; // 15 in decimal
const octalBig = 0o377; // 255 in decimal

// 4. Hexadecimal literal (base 16)
const hexValue = 0xFF; // 255 in decimal
const hexValue2 = 0x1A3; // 419 in decimal

// 5. BigInt literal (integer values larger than Number.MAX_SAFE_INTEGER)
const bigIntValue = 123456789012345678901234567890n;
const bigIntHex = 0x1fffffffffffffn; // BigInt hex literal
const bigIntBinary = 0b101010n; // BigInt binary literal
const bigIntOctal = 0o755n; // BigInt octal literal

// 6. Numeric separators for readability
const largeNumber = 1_000_000;
const binarySeparator = 0b1010_1010;
const hexSeparator = 0xFF_FF;

// Notes:
// - Decimal literals are the standard numeric form with optional fractional and exponential parts.
// - Binary literals start with 0b or 0B and use only 0 and 1 digits.
// - Octal literals start with 0o or 0O and use digits 0 through 7.
// - Hexadecimal literals start with 0x or 0X and use digits 0-9 and letters A-F/a-f.
// - BigInt literals end with n and represent arbitrarily large integers.
// - Numeric separators (_) make long numeric literals easier to read.

console.log(decimalValue, decimalFloat, decimalExponential);
console.log(binaryValue, octalValue, hexValue);
console.log(bigIntValue, largeNumber);
