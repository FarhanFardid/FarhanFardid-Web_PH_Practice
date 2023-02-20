const numbers = [45,76,39,80,56];

const  largest = Math.max(...numbers);
console.log(largest);


const numbers2= [...numbers];
numbers.push(79);
numbers2.push(100);
const numbers3= [67, 90, 87, ...numbers2, 89,50];
console.log(numbers);
console.log(numbers2);
console.log(numbers3);