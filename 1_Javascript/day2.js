// Statement and Expresion
// let a = 10; // whole statement
// a = 1 + (x +2); // expression (x+2) (small computable of code), expression make statements

// Conditions
// 1. if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. else
let age2 = 16;
if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

//3. else if
let age3 = 16;
if (age3 >= 18) {
    console.log("You are an adult.");
} else if (age3 >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

//4. switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// 5. Ternary Operator
let age4 = 20;
let status = (age4 >= 18) ? "Adult" : "Minor";
console.log(status); // Output: Adult


// Loops

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// 2. while loop
let i = 0;
while (i < 5) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
    i++;
}

// TODO: 
// 1. break : The break statement stops the loop entirely, immediately exiting and moving to the next part of the code outside the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// 2. continue : The continue statement skips the current iteration and moves directly to the next iteration of the loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of this loop iteration when i is 5
    }
    console.log(i); // Outputs: 0, 1, 2, 3, 4, 6, 7, 8, 9
}


// 3. do while loop
let i2 = 0;
do {
    console.log(i2); // Outputs: 0, 1, 2, 3, 4
    i2++;
} while (i2 < 5);

// 4. for of
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit); // Outputs: apple, banana, cherry
}


// 5. for in
const person = { name: "Alice", age: 25, city: "Berlin" };
for (const key in person) {
    console.log(key + ": " + person[key]);
    // Outputs: name: Alice, age: 25, city: Berlin
}


// functions
// 1. Functoin Declaration: A function declaration creates a named function that can be called anywhere in the scope where it’s defined.

function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice")); // Output: Hello, Alice

// 2. Function Expression : A function expression defines a function as a part of a variable. Unlike function declarations, function expressions are not hoisted, so they cannot be called before they are defined

const greet = function(name) {
    return "Hello, " + name;
};
console.log(greet("Alice")); // Output: Hello, Alice


// 3. Arrow Function : Arrow functions provide a shorter syntax and automatically bind the this value from their surrounding context. They are ideal for inline or one-liner functions
const greet = (name) => "Hello, " + name;
console.log(greet("Alice")); // Output: Hello, Alice

const add = (a, b) => {
    let sum = a + b;
    return sum;
};
console.log(add(3, 5)); // Output: 8

