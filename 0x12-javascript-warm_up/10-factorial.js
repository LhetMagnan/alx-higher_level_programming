#!/usr/bin/node
const myArray = process.argv.slice(2);
const number = parseInt(myArray[0]);
if (isNaN(myArray[0])) {
    console.log(1);
}
else {
    console.log(factorial(number));
}
function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}