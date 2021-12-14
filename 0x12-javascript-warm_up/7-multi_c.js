#!/usr/bin/node
const myArray = parseInt(process.argv);
let string;
if (isNaN(myArray[0])) {
  string = 'Missing number of occurrences';
  console.log(string);
} else {
  string = 'C is fun';
  console.log(string);
  for (let number = 0; number <= myArray[0]; number++) {
    console.log(string);
  }
}
