#!/usr/bin/node
const { dict } = require('./101-data.js');
const dictionary = {};
for (const n in dict) {
  if (dictionary[dict[n]] === undefined) {
    dictionary[dict[n]] = [];
  }
  dictionary[dict[n]].push(n);
}
console.log(dictionary);
