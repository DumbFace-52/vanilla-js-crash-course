/* Take the variable myString and capitalize the first letter of the word. Put the result in a variable called myNewString. */

// Challenge 01: Solution

let myString;

myString = 'guardian';

// Solution 1: Using .substring()
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2: Using .slice()
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// Solution 3: Using template literals
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

// Solution 4: Using []
myNewString = myString[0].toUpperCase() + myString.slice(1);

// Solution 5: Array Method
myNewString = myString.split('');
myNewString[0] = myNewString[0].toUpperCase();
myNewString = myNewString.join('');


console.log(myNewString);