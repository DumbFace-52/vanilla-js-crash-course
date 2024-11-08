// Working with Numbers

let myNumber;

const num = new Number(50.9999);
// console.log(num, typeof num);

myNumber = num.toString();

myNumber = num.toString().length;

myNumber = num.toFixed(2);

myNumber = num.toPrecision(3)

myNumber = num.toExponential(2);

myNumber = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

myNumber = num.valueOf();

myNumber = Number.MAX_VALUE;

myNumber = Number.MIN_VALUE;

console.log(myNumber, typeof myNumber);