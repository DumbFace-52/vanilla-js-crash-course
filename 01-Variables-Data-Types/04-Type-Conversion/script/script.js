// Coverting a String to a Number

// Example 1
let age = '20';
console.log(typeof age, age);

age = parseInt(age);
console.log(typeof age, age);

age = +age;
console.log(typeof age, age);

age = Number(age);
console.log(typeof age, age);

// Convert a Number to a String

// Example 2
let score = 200;
console.log(typeof score, score);

score = score.toString();
console.log(typeof score, score);

score = String(score);
console.log(typeof score, score);

// Convert String to a Decimal

// Example 3
let myScore = '99.5';
console.log(typeof myScore, myScore);

myScore = parseFloat(myScore);
console.log(typeof myScore, myScore);

myScore = Number(myScore);
console.log(typeof myScore, myScore);

myScore = +myScore;
console.log(typeof myScore, myScore);

myScore = parseInt(myScore);
console.log(typeof myScore, myScore);

// Convert a Number to a Boolean

// Example 4
let isActive = 0;
console.log(typeof isActive, isActive);

isActive = Boolean(isActive);
console.log(typeof isActive, isActive);

isActive = !isActive;
console.log(typeof isActive, isActive);


// NaN
// Example 5
let myMemo = 'Hello';
myMemo = parseInt(myMemo);

console.log(1 + NaN);
console.log(Math.sqrt(-1));
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(typeof myMemo, myMemo);
