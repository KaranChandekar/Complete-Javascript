'use strict';
///////////////////////////////////////
// The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposit);

// same with for-of loop
const depositFor = [];
for (const mov of movements)
  if (mov > 0) {
    depositFor.push(mov);
  }
console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
