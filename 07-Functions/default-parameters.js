'use strict';

///////////////////////////////////////
// Default Parameters

const bookings = [];

const flightBooking = function (
  flightNum,
  numPassengers = 1,
  price = 120 * numPassengers
) {
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
flightBooking('LKH123', 2, 75);
flightBooking('LKH123', 2);
flightBooking('LKH123', undefined, 400);
