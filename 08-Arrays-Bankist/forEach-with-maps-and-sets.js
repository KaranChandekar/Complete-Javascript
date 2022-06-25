'use strict';
/////////////////////////////////////////////////
// FOREACH with Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// with Maps
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
