var numbers = [3, 56, 2, 48, 5];

//######## Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers);

//######## Filter - Create a new array by keeping the items that return true.

const newFilterNumbers = numbers.filter(function(num) {
  return num < 10;
});
console.log(newFilterNumbers);


//######## Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
})

//######## Find - find the first item that matches from an array.

const newFindNumber = numbers.find(function (num) {
  return num > 10;
})

console.log(newFindNumber);

//######## FindIndex - find the index of the first item that matches.

const newFindIndexNumber = numbers.findIndex(function (num) {
  return num > 10;
})

console.log(newFindIndexNumber);

import emojipedia from "./emojipedia"

console.log(emojipedia)
console.log("new array")

const newArray = emojipedia.map(function(emojiRecord){
    return emojiRecord.meaning.substring(0,100)
})
console.log(newArray)
