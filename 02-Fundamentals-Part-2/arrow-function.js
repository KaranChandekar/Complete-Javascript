////////////////////////////////////
// Arrow function

"use strict";

const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 62 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years!`;
};
console.log(yearsUntilRetirement(2003, "Karan"));
