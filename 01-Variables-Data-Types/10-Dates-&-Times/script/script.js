// Dates and Times

// Example 1
const myDate = new Date();
console.log(myDate);

// Example 2
let myDate2 = new Date();

// Convert to String
myDate2 = myDate2.toString();

// Setting a Specific Date
myDate2 = new Date(2022, 0, 1, 12, 30, 0);

// Setting to a String
myDate2 = new Date('2022-01-01 12:30:00');

// Setting to Time
myDate2 = new Date('2022-01-01T12:30:00');
myDate2 = new Date('01/01/2022 12:30:00');

// If you sart with a year first, the date might be off by a day due to Time Zone differences.
myDate2 = new Date('2022-07-10');

// https://stackoverflow.com/questions/7556591/is-the-javas-date-object-always-one-day-off

myDate2 = Date.now();

// Getting Time of a Specific date
myDate2 = new Date().getTime();
// Using valueOf()
myDate2 = new Date().valueOf();

// Creating Date Objects from Time Stamps
myDate2 = new Date(1731047298506);
// myDate2 = new Date(1000);
// myDate2 = new Date(1600000000000);

// Converting to Seconds
myDate2 = Math.floor(Date.now() / 1000);


console.log(typeof myDate2, myDate2);