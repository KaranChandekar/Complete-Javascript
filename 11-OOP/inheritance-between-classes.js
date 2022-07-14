'use strict';

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call = (this, firstName, birthYear);
  this.course = course;
};
console.log(Student);

Student.prototype.introduce = function () {
  console.log(
    `Hey there! My name is ${this.firstName} and persuing ${this.course}`
  );
};

const mike = new Student('Mike', 2003, 'Computer Science');
console.log(mike);
mike.introduce();
