'use strict';

///////////////////////////////////////
// Default Parameters

const bookings = [];

const flightBooking = function (flightNum, numPassengers = 1, price = 1) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

flightBooking('LKH123');
