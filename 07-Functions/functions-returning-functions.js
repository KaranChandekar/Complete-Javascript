'use strict';
///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Karan!');
greeterHey('Steve!');

// is same as...
greet('Hello')('Karan');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hii')('Martin');
