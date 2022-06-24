'use strict';
/////////////////////////////////////////////////
// Simple Array Methods
const arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(1, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(2, -1));
console.log(arr.slice());
console.log([...arr]);
