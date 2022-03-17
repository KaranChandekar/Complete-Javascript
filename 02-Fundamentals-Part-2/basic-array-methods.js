///////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ["Vikrant", "Amit", "Dip"];

// Add elements
const newLength = friends.push("Pankaj");
console.log(friends);
console.log(newLength);

friends.unshift("Amol");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Amit"));
console.log(friends.indexOf("Oreo"));

console.log(friends.includes("Amit"));
console.log(friends.includes("Oreo"));
