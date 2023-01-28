var fruits =['apple', 'banana', 'orange'];

var banana_pos=fruits.indexOf('banana');
fruits[banana_pos] ='mango';
console.log(fruits);

fruits.pop();
fruits.push('watermelon');
console.log("after removing orange and adding watermelon we get:  ");
console.log(fruits);
