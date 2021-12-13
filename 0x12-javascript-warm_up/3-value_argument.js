#!/usr/bin/node
const myArray = process.argv.slice(2);
if (myArray[0] === undefined) {
    console.log('No argument');
}
else {
    console.log(myArray[0]);
}
