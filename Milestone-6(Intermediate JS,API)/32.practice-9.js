// array Map, foreach, filter, find, reduce

let numbers = [ 3, 4, 6, 8, 9, 12, 15 ];

let square = numbers.map( n => Math.pow(n,2));
console.log(square);

let double = numbers.forEach(n =>  {console.log(n*2)});

let bigValues = numbers.filter( n => n > 10);
console.log(bigValues);  

let onlyValue = numbers.find(n => ( n > 5) );
console.log(onlyValue);

let sum = numbers.reduce((previous,current) => {
    return current = previous + current;
}, 0);

console.log(sum);