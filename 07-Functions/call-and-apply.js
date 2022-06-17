'use strict';
///////////////////////////////////////
// The call and apply Methods
const indigo = {
  airline: 'Indigo',
  iataCode: '6E',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};
indigo.book(123, 'Karan Chandekar');
indigo.book(456, 'John Wick');
