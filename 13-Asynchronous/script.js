'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/india');
request.send();
console.log(request.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});
