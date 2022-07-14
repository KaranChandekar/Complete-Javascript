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

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else {
      alert(`${name} is not a fullname!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const amanda = new PersonCl('Amanda Davis', 1998);
const walter = new PersonCl('Walter White', 1995);
console.log(amanda.age);
console.log(amanda);
 