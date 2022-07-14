'use strict';

///////////////////////////////////////
// ES6 Classes

// Class expression
const Person = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

PersonCl.hey();

const amanda = new PersonCl('Amanda', 1998);
console.log(amanda);
amanda.calcAge();

console.log(amanda.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
amanda.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
