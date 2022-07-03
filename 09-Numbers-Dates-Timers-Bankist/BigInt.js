'use strict';
///////////////////////////////////////
// Working with BigInt

// MAX_SAFE_INTEGER
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// Using BigInt
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
