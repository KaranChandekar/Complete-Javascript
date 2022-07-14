'use strict';

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Karan',
  movements: [200, 150, 300, 420],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
