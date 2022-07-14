'use strict';

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Karan',
  movements: [200, 150, 300, 420],

  get latest() {
    return this.movements.slice(-1).pop();
  },
};
console.log(account.latest);
