// String search

let string = 'Hello world. This is Bangladesh. South Asian country.';
 

let searchWord = 'rld';
let stringLow = string.toLowerCase();
let position = stringLow.charAt(3);
let index = stringLow.indexOf('this');
let contain =stringLow.includes(searchWord.toLowerCase());

console.log("The search word contained in the string is :  ", contain);

console.log("The Char At :  ", position);
console.log("The index is :  ", index);
