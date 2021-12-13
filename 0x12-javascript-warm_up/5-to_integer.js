#!/usr/bin/node
const args = process.argv;
let number;
number = parseInt(args[2]);
if (isNaN(number)) {
    number = 'Not a number';
} else {
    number = ('My number: ' + number);
}
console.log(number);
