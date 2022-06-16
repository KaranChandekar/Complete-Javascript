'use strict';

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LKH234';
const karan = {
  name: 'Karan Chandekar',
  passport: 267395148097,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LKH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 267395148097) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, karan);
console.log(flight);
console.log(karan);

// is the same as doing...
const flightNum = flight;
const passenger = karan;
