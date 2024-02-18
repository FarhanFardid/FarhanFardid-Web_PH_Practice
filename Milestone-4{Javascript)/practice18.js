var array1 = [23, 45, 67, 98, 34, 90, 67, 87 ];
var array2 = [43, 56,76, 89, 90 ];


let combined = array1.concat(array2);
let joined = array1.join( '' , '');


console.log("The main array is: ", array1);

console.log("The Concatenated array is: ", combined);
console.log("The joined array is: ", joined);


let cut1 = array1.slice(2,5);
console.log("The slice of the array is: ", cut1);

let cut2 = array1.splice(1,3 , 99);
console.log("The splice of the array is: ", cut2);

console.log("The main array after splice is: ", array1);
