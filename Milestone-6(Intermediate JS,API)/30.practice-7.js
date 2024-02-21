// spread operator

let numbers = [ 34, 12, 54, 67, 90,  34 ];

let numbers2 = [ 14, 27, 11, 78 ];
let numbers3 = [...numbers, 60, 70];
let numbers4 = [...numbers2];
let numbers5 = [...numbers , ...numbers2];

let max = Math.max(...numbers5);

// let newList =

console.log(numbers3);
console.log(numbers4);
console.log(numbers5);
console.log(max);