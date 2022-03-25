///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const karan = [
  "karan",
  "Chandekar",
  2022 - 2003,
  "student",
  ["Vikrant", "Amit", "Dip"],
  true,
];
const types = [];

// console.log(karan[0])
// console.log(karan[1])
// ...
// console.log(karan[4])
// karan[5] does NOT exist

for (let i = 0; i < karan.length; i++) {
  // Reading from karan array
  console.log(karan[i], typeof karan[i]);

  // Filling types array
  // types[i] = typeof karan[i];
  types.push(typeof karan[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < karan.length; i++) {
  if (typeof karan[i] !== "string") continue;

  console.log(karan[i], typeof karan[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < karan.length; i++) {
  if (typeof karan[i] === "number") break;

  console.log(karan[i], typeof karan[i]);
}
