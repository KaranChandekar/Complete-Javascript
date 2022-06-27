'use strict';
///////////////////////////////////////
// some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// EQUALITY
console.log(movements.includes(-650));

// CONDITION
const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);
