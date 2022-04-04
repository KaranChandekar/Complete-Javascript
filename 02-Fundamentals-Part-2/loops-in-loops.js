///////////////////////////////////////
// Looping Backwards and Loops in Loops

"use strict";

const karan = [
  "Karan",
  "Chandekar",
  2022 - 2003,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = karan.length - 1; i >= 0; i--) {
  console.log(i, karan[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
