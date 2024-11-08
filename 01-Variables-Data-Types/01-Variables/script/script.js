// Variables

// Declaring a variable

// Example 1
let firstName = 'Dumbface';
let lastName = 'Guardian';
let age = 20;

console.log(firstName);
console.log(lastName);
console.log(age);

// Naming Conventions
// -Only letters, numbers, and underscores and dollar signs
// -Cannot start with a number
// -Cannot contain spaces
// -Case-sensitive

// Re-assigning a variable

// Example 2
age = 21;
console.log(age);

// Example 3
let score;
score = 200;
console.log(score);

if (true) {
    score = score + 100;
}
console.log(score);

// Example 4
const person = {
    name: 'Dumbface',
    age: 20
};
person.age = 21;
console.log(person);

person.email = 'dumbface@hh.com';
console.log(person);

// Declaring multiple values at once

// Example 5
let a, b, c;

const d = 10, e = 20, f = 30;
console.log(a, b, c, d, e, f);
