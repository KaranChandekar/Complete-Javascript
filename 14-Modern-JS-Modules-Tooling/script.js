///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 4);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);   // will not work

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 7);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add from './shoppingCart.js';
add('pizza', 5);
add('bread', 7);
add('apples', 3);

// imports are not copies of the exports they are instead a live connection
import { cart } from './shoppingCart.js';
console.log(cart);
