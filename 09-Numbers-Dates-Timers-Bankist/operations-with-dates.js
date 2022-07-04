'use strict';
///////////////////////////////////////
// Operations With Dates

const future = new Date(2023, 10, 28, 16, 44, 26);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const daysPassed = calcDaysPassed(
  new Date(2023, 10, 28),
  new Date(2023, 10, 21)
);
console.log(daysPassed);
