'use strict';
///////////////////////////////////////
// The bind Method
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

const goAir = {
  airline: 'go Air',
  iataCode: 'G8',
  bookings: [],
};
const book = indigo.book;

// book.call(indigo, 23, 'Mark Williams')

const book6E = book.bind(indigo);
const bookG8 = book.bind(goAir);

book6E(45, 'Karan Chandekar');

const book6E67 = book.bind(indigo, 67);
book6E67('Brian Miller');
