'use strict';

///////////////////////////////////////
// Default Parameters

const flightBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

flightBooking();
