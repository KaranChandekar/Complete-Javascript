'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
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

console.log(karan instanceof Person);

// Static method
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
