/*
Number Challenge;

Create a variable for the sum, difference, product, and quotient of myNumberX and myNumberY. Log out the output in a string that shows the two numbers of myNumberX and myNumberY along with the operator and results.

    You can log out the output string directly or put them in a separate variables and log them to console.
    You can use string concatenation or template literals for the output.
*/

// Solution Part 1-A:

let myNumberX;
myNumberX = Math.floor(Math.random() * 100 + 1);
let myNumberY;
myNumberY = Math.floor(Math.random() * 50 + 1);

console.log(myNumberX, myNumberY);

// Solution Part 1-B:
// Addition;
const sumTotal = myNumberX + myNumberY;
const sumTotalOutput = `${myNumberX} + ${myNumberY} = ${sumTotal}`;
console.log(sumTotalOutput);

// Subtraction;
const difference = myNumberX - myNumberY;
const differenceOutput = `${myNumberX} - ${myNumberY} = ${difference}`;
console.log(differenceOutput);

// Multiplication;
const product = myNumberX * myNumberY;
const productOutput = `${myNumberX} * ${myNumberY} = ${product}`;
console.log(productOutput);

// Division;
const quotent = myNumberX / myNumberY;
const quotentOutput = `${myNumberX} / ${myNumberY} = ${quotent.toFixed(2)}`;
console.log(quotentOutput);

// Modulus/ Remainder;
const remainder = myNumberX % myNumberY;
const remainderOutput = `${myNumberX} % ${myNumberY} = ${remainder}`;
console.log(remainderOutput);