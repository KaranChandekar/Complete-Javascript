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
}

const amanda = new PersonCl('Amanda', 1998);
console.log(amanda);
