// Type Coercion

// Example 1
let z;

z = 25 + '25';

z = 25 + Number('25');

z = 25 * '25';

z = 25 + null;

z = Number(null);

z = Number(true);
z = Number(false);

z = 25 + false;
z = 25 + true;

z = 25 + undefined; 

console.log(z, typeof z);