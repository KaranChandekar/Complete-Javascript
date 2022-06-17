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

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Karan', 'Alex', 'Martin', 'Tom'].forEach(high5);
