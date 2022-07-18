'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
const request = XMLHttpRequest();
request.open('GET', 'https:/restcountries.eu/rest/v2/name/portugal');
