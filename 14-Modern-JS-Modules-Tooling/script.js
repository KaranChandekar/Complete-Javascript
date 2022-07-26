///////////////////////////////////////
// Exporting and Importing in ES6 Modules

/*
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
*/

///////////////////////////////////////
// The Module Pattern

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 263;
  const totalQuantity = 53;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 6);
ShoppingCart2.addToCart('pizza', 3);
console.log(ShoppingCart2);
*/

///////////////////////////////////////
// CommonJS Modules
/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import
const {addToCart} = require('./shoppingCart.js')
*/

///////////////////////////////////////
// Introduction to NPM

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
