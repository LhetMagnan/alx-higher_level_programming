#!/usr/bin/node
const args = process.argv.slice(2);
const files = require('files');
const firstFile = files.readFileSync('./' + args[0]);
const secondFile = files.readFileSync('./' + args[1]);
files.writeFileSync('./' + args[2], firstFile + secondFile);
