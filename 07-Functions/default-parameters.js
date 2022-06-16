'use strict';

///////////////////////////////////////
// Default Parameters

const bookings = [];

const flightBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

flightBooking('LKH123');
