#!/usr/bin/node
const mySquare = parseInt(process.argv.slice(2));
let square;
if (isNaN(mySquare[0])) {
  square = 'Missing size';
  console.log(square);
} else {
  square = 'X';
  console.log(square);
  for (let number = 0; number <= mySquare[0]; number++) {
    console.log(square);
  }
}
