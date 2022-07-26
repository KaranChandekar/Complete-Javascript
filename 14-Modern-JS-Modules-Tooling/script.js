// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 4);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);   // will not work

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 7);
console.log(ShoppingCart.totalPrice);
