'use strict';
///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(oneWord('Karan Chandekar'));
console.log(upperFirstWord('Karan Chandekar'));
