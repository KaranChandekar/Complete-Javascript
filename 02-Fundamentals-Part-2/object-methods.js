///////////////////////////////////////
// Object Methods

"use strict";

const karan = {
  firstName: "Karan",
  lastName: "Chandekar",
  birthYear: 2003,
  occupation: "student",
  friends: ["Vikrant", "Amit", "Dip"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(karan.calcAge());
console.log(karan.age);
