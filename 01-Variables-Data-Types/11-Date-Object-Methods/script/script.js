// Date Object Methods

// Example 1
let myDate;
let myDate2 = new Date();

// To string
myDate = myDate2.toString();

// Value of Date
myDate = myDate2.valueOf();

// Getting Time
myDate = myDate2.getTime();

// Getting Milliseconds
myDate = myDate2.getMilliseconds();

// Getting Seconds
myDate = myDate2.getSeconds();

// Getting Minutes
myDate = myDate2.getMinutes();

// Getting Hour
myDate = myDate2.getHours();

// Getting Day of Week (0-6)
myDate = myDate2.getDay();

// Getting Date
myDate = myDate2.getDate();

// Getting Month (0-11) --- Month is 0 based
myDate = myDate2.getMonth();
// or
myDate = myDate2.getMonth() + 1;

// Getting Year
myDate = myDate2.getFullYear();

// Constructing a Date from the Methods
myDate = `${myDate2.getFullYear()}-${myDate2.getMonth() + 1}-${myDate2.getDate()}`;


// API that can be used for Date Formats

// Example 2
myDate = Intl.DateTimeFormat('default').format(myDate2);
myDate = Intl.DateTimeFormat('en-US').format(myDate2);
myDate = Intl.DateTimeFormat('en-GB').format(myDate2);

// Example 3
myDate = Intl.DateTimeFormat('default', { year: 'numeric', month: 'long', day: 'numeric' }).format(myDate2);

myDate = Intl.DateTimeFormat('default', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }).format(myDate2);

myDate = myDate2.toLocaleString('default', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

myDate = myDate2.toLocaleString('default', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC'  // or 'America/New_York' or 'Asia/Tokyo' etc.
});

// Time Zone

// Example 4
myDate = myDate2.toLocaleString('default', {
    timeZone: 'UTC'
});

console.log(myDate);