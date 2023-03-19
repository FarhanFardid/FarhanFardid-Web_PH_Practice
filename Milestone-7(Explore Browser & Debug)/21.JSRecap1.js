const arr1=[23, 45, 67, 86, 46, 21, 56, 43];

console.log("The Length of the array is: " + arr1.length);
let element2 = arr1[2];
console.log("element at position 2 is: " + element2);
arr1[8]=100;
console.log(arr1);
arr1.push(102);
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(arr1.indexOf(67));
console.log(arr1.includes(67));
const arr2 = arr1.slice(1,6);
console.log(arr2);
const arr3 = arr1.splice(1,6);
console.log(arr3);
const arr4 = arr2.concat(arr3);
console.log(arr4);

const r1=arr1.shift();
console.log(r1);
const r2=arr1.unshift(50);
console.log(arr1);