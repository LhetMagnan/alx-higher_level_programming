#!/usr/bin/node
const myArray = process.argv.slice(2);
if (myArray[0] === undefined && myArray[1] === undefined) {
  console.log('undefined is undefined');
} else if (myArray[0] !== undefined && myArray[1] !== undefined) {
  console.log(myArray[0] + ' is ' + myArray[1]);
} else if (myArray[0] !== undefined && myArray[1] === undefined) {
  console.log(myArray[0] + ' is undefined');
} else if (myArray[0] === undefined && myArray[1] !== undefined) {
  console.log('undefined is ' + myArray[1]);
}
