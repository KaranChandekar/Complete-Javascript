///////////////////////////////////////
// Introduction to Arrays

const friend1 = "Vikrant";
const friend2 = "Amit";
const friend3 = "Dip";

const friends = ["Vikrant", "Amit", "Dip"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Devid";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Karan";
const karan = [firstName, "Chandekar", 2022 - 2003, "student", friends];
console.log(karan);
console.log(karan.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2022 - birthYeah;
};
const years = [1990, 1967, 2003, 2010, 2015];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
