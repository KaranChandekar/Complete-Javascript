'use strict';
///////////////////////////////////////
// More Closure Examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 666;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

// Re-assigning f function
h();
f();
console.dir(f);
