'use strict';
///////////////////////////////////////
// some and every

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// EQUALITY
console.log(movements.includes(-650));

// SOME: Condition
const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
