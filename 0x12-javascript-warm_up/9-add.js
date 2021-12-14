#!/usr/bin/node
const myArray = process.argv.slice(2);
const numberA = parseInt(myArray[0]);
const numberB = parseInt(myArray[1]);
if (typeof numberA === 'number' && typeof numberB === 'number') {
  console.log(add(numberA, numberB));
} else {
  console.log('NaN');
}
function add (a, b) {
  return (a + b);
}
