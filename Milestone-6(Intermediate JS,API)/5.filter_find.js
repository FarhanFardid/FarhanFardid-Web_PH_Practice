const numbers = [33, 50, 79, 78, 90, 101, 30];

const new_arr = numbers.filter(n => (n%10 == 0));
console.log(new_arr);

const new_arr1 = numbers.find(n => (n%10 == 0));
console.log(new_arr1);