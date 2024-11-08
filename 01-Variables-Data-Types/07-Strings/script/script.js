// Working With Strings

// Example 1
let x;

const myName = 'Dumbface';
const myLastName = 'Guardian';
const myAge = 20;

// Use of Concatenation
x = 'Lomen, my name is ' + myName + ' ' + myLastName + ' ' + 'and I am ' + myAge + ' years old.';

// Template Literals
x = `Lomen, my name is ${myName} ${myLastName} and I am ${myAge} years old.`;

// String Properties and Methods
const myMessage = new String('You don`t need a reason to trust Lord Smiley Face.');

x = typeof myMessage;

x = myMessage.length;

// Access value by key
x = myMessage[0];

x = myMessage.__proto__;

// Convert to upper case
x = myMessage.toUpperCase();

// Convert to lower case
x = myMessage.toLowerCase();

// charAt
x = myMessage.charAt(0);

// indexOf
x = myMessage.indexOf('o');

// substring
x = myMessage.substring(0, 3);
x = myMessage.substring(3, 6);
x = myMessage.substring(3);

// slice
x = myMessage.slice(0, 3);
x = myMessage.slice(-51, -6)

// trim
x = '    You don`t need a reason to trust Lord Smiley Face.    ';
x = myMessage.trim();

// replace
x = myMessage.replace('Smiley', 'Dumbface');

// includes
x = myMessage.includes('Smiley');

// valueOf
x = myMessage.valueOf();

// split
x = myMessage.split(' ');

console.log(x);