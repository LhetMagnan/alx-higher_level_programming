#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let i = 0;
  let elementFound = 0;
  for (i; i < list.length; i++) {
    if (list[i] === searchElement) {
      elementFound++;
    }
  }
  return elementFound;
};
