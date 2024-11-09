/* 
***** NOTE *****

TODO: 1. Introduction to Javascript
? - It is a multi-purpose & Multi Paradigm programming lanuage.

! multi-purpose : use is various task (frontend, backend, script, mobile app, etc)
! Multi Paradigm : its suport many way of style like, oops, procedure, etc.

TODO: ECMAScript
? - Initially it name ECMAScript after that renamed to JS.
? - ECMAScript types are: undefined, Null, Boolean, String, Symbol, Number, and Object.

TODO: Data Types
! 1. Premitive Data Type : Atomic Nature (undefined, Null, Boolean, String, Symbol, Number)
! 2. Non Premitive Data Type: 

TODO: Operators
? - typeof, Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators, String Operators, Ternary Operator, Type Operators, Unary Operators, Comma Operator.
! - typeof returns as a string which contains the type description of the value.
! AND Operators: T T = T, T F = F, F T = F, F F = F
! OR Operator: T T = T, T F = T, F T = T, F F = F

TODO: Program and Process
? - Program : if we write a code in a file that is a program 
? - Program in a running state is called process.

TODO: Varibale
- keyword: they have special meaning in lanuage
- let, var, const


*/


// console.log("Hello"); // print and add new line 
// ProcessingInstruction.stdout.write("Hello"); // continuously print


// ********  Data Type ******
// 1. String
let name = "John Doe";
console.log("String:", name); // Output: String: John Doe

// 2. Number
let age = 25;
let price = 19.99;
console.log("Number (age):", age);       // Output: Number (age): 25
console.log("Number (price):", price);   // Output: Number (price): 19.99

// 3. BigInt
let largeNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", largeNumber);     // Output: BigInt: 1234567890123456789012345678901234567890n

// 4. Boolean
let isActive = true;
let isStudent = false;
console.log("Boolean (isActive):", isActive);   // Output: Boolean (isActive): true
console.log("Boolean (isStudent):", isStudent); // Output: Boolean (isStudent): false

// 5. Undefined
let notAssigned;
console.log("Undefined:", notAssigned);  // Output: Undefined: undefined

// 6. Null (Represents the intentional absence of any object value.)
let emptyValue = null;
console.log("Null:", emptyValue);        // Output: Null: null

// 7. Symbol (unique identifier, often used for object properties)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);        // Output: Symbol: Symbol(id)

// 8. Object (key value pair)
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log("Object (person):", person); // Output: Object (person): { name: 'Alice', age: 30, isStudent: false }

// 9. Array (also an Object)
let fruits = ["apple", "banana", "cherry"];
console.log("Array (fruits):", fruits);  // Output: Array (fruits): [ 'apple', 'banana', 'cherry' ]

// 10. Function
function greet() {
    return "Hello, world!";
}
console.log("Function (greet):", greet); // Output: Function (greet): [Function: greet]
console.log("Function call (greet()):", greet()); // Output: Function call (greet()): Hello, world!

// 11. Date
let today = new Date();
console.log("Date (today):", today);     // Output: Date (today): Current date and time

// 12. Regular Expression (RegExp)
let pattern = /hello/i;
console.log("RegExp (pattern):", pattern); // Output: RegExp (pattern): /hello/i


// ****** Operators ******
console.log("\n\n****** Operators ******\n\n");


// Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);           // 13
console.log("Subtraction:", a - b);        // 7
console.log("Multiplication:", a * b);     // 30
console.log("Division:", a / b);           // 3.3333333333333335
console.log("Modulus (Remainder):", a % b);// 1
console.log("Exponentiation:", a ** b);    // 1000

// Assignment Operators
console.log("\n\nAssignment Operators\n\n");

let x = 5;
console.log("Assignment:", x);               // 5
x += 2;
console.log("Add and assign (x += 2):", x);  // 7
x -= 3;
console.log("Subtract and assign (x -= 3):", x); // 4
x *= 2;
console.log("Multiply and assign (x *= 2):", x); // 8
x /= 4;
console.log("Divide and assign (x /= 4):", x);   // 2
x %= 2;
console.log("Modulus and assign (x %= 2):", x);  // 0

// Comparison Operators
console.log("\n\nComparison Operators\n\n");

let y = 5, z = 10;
console.log("Equal:", y == z);               // false
console.log("Not equal:", y != z);           // true
console.log("Strict equal:", y === 5);       // true
console.log("Strict not equal:", y !== '5'); // true
console.log("Greater than:", z > y);         // true
console.log("Less than or equal:", y <= z);  // true
// >, <, >=, <=, !=, !==, ==, === (conersion topic)

// Logical Operators
console.log("\n\nLogical Operators\n\n");

let p = true, q = false;
console.log("AND (p && q):", p && q);   // false
console.log("OR (p || q):", p || q);    // true
console.log("NOT (!p):", !p);           // false
// 4 && 0 // 0  
// 4 || 0 // 4
// 0 && 4 // 0
// 0 || 4 // 4
// -0 && 4 // 0


// String Operators
console.log("\n\nString Operators\n\n");

let str1 = "Hello, ";
let str2 = "world!";
console.log("Concatenate:", str1 + str2);       // "Hello, world!"
str1 += "everyone";
console.log("Concatenate and assign:", str1);  // "Hello, everyone"

// Bitwise Operators (these operators doesn't directly operator on numbers, but instead operate on binary representation of number)
console.log("\n\nBitwise Operators\n\n");

// https://www.programiz.com/javascript/bitwise-operators

console.log(5 & 3);
console.log(3 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);


// Ternary Operator
console.log("\n\nTernary Operator\n\n");

let age1 = 18;
let isAdult = age1 >= 18 ? "Yes" : "No";
console.log("Is adult?:", isAdult); // "Yes"



// Type Operators
console.log("\n\nType Operators\n\n");

console.log("Type of age:", typeof age);                  // "number"
console.log("Type of str1:", typeof str1);                // "string"
console.log("Instance of Array:", fruits instanceof Array); // true
console.log(typeof undefined);
console.log(typeof null); 
console.log(typeof(typeof(12))); // string



// variable
let letx = 10;
var vary = 20;
const constz = 30;
console.log(letx,vary,constz);
