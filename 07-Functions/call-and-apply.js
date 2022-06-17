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

const goAir = {
  airline: 'go Air',
  iataCode: 'G8',
  bookings: [],
};
const book = indigo.book;
// Does NOT work
// book(789, 'Sarah Logan');

book.call(goAir, 789, 'Sarah Logan');
console.log(goAir);

book.call(indigo, 789, 'Mary Cooper');
console.log(indigo);
