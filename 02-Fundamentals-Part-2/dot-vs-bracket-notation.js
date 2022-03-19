///////////////////////////////////////
// Dot vs. Bracket Notation

const karan = {
  firstName: "Karan",
  lastName: "Chandekar",
  age: 2022 - 2003,
  job: "student",
  friends: ["Vikrant", "Amit", "Dip"],
};
console.log(karan);

console.log(karan.lastName);
console.log(karan["lastName"]);

const nameKey = "Name";
console.log(karan["first" + nameKey]);
console.log(karan["last" + nameKey]);

// console.log(karan.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Karan? Choose between firstName, lastName, age, job, and friends"
);

if (karan[interestedIn]) {
  console.log(karan[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

karan.location = "Maharashtra";
karan["twitter"] = "@karan_chandekar";
console.log(karan);
