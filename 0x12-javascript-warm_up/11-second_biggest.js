#!/usr/bin/node
const myArray = process.argv.slice(2);
let myArray2 = [];
function sortNumber (a, b) {
    return a - b;
}
if (myArray[0] === undefined) {
    console.log(0);
} else if (myArray.length === 1) {
    console.log(0);
} else {
    myArray2 = myArray.sort(sortNumber);
    myArray2.pop();
    console.log(parseInt(myArray2[myArray2.length - 1]));
}
