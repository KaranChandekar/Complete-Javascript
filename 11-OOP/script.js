'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const karan = new Person('Karan', 2003);
console.log(karan);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person('jonas', 1991);
const matilda = new Person('matilda', 1995);
console.log(jonas, matilda);
