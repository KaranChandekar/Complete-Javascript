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

// With Event Listeners
indigo.planes = 300;
indigo.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};
// indigo.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', indigo.buyPlane.bind(indigo));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));
