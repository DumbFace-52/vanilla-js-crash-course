// Data Types

// Primitive Data Types
    // - String: Sequence of characters. Must be in quotes or backticks.
    // - Number: Integers as ell as floating-point numbers.
    // - Boolean: true or false/ Logical entity.
    // - Null: Intentional absence of any object value.
    // - Undefined: A Variable that has not yet been defined / assigned.
    // - Symbol: Built-in object whose constructor returns a unique symbol.
    // - BigInt: Numbers that are greater than the "Number" type can handle.

// Non-Primitive Data Types
// - Reference types or 'objects' are non-primitive value and when assigned to a variable, the variable is given a reference to that value

// - Object literals, arrays and functions are all reference types.

// Static Typing vs Dynamic Typing
// - JavaScript is a dynamically-typed language. We don't explicity define the types for our variables. Many other languages are statically-typed: C, C++ and Java.

// -TypeScript is a superset of JavaScript, which allows static-typing. This can make your code more verbose and less prone to errors. 

// String
// Example 1
const firstName = 'Dumbface';
const output = 'Hello ' + firstName; ;
console.log(typeof output, output);

// Number
// Example 2
const age = 20;
console.log(typeof age, age);

// Boolean
// Example 3
const isTrue = true;
console.log(typeof isTrue, isTrue);

// Null
// Example 4
const nullValue = null;
console.log(typeof nullValue, nullValue);

// https://developer.mozilla.org/en-Us/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
// Example 5
// let undefinedValue;
const undefinedValue = undefined;
console.log(typeof undefinedValue, undefinedValue);

// Symbol
// Example 6
const symbolValue = Symbol('Dumbface');
console.log(typeof symbolValue, symbolValue);

// BigInt
// Example 7
const bigintValue = 9007199254740991n;
console.log(typeof bigintValue, bigintValue);

// Reference Types
// Objects
// Arrays
// Functions
// Dates

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// Example 8
const person = {
    name: 'Dumbface',
    age: 20
};
console.log(typeof person, person);

const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers, numbers);

function greet() {
    console.log('Hello!');
}
console.log(typeof greet, greet);

const today = new Date();
console.log(typeof today, today);

// https://262.ecma-international.org/13.0/#sec-11.4.3