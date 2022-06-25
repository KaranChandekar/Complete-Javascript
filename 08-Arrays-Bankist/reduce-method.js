'use strict';
///////////////////////////////////////
// The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

// with arrow function
const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance);

// same with for-of loop
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
