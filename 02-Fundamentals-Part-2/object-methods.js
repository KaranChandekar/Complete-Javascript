///////////////////////////////////////
// Object Methods

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

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(karan.calcAge());
