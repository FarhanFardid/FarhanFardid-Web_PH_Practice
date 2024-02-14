var numbers = [34, 45, 65, 78, 90, 343, 456, 43, 679 ];
// array push
numbers.push(1000);
console.log("after push:" + numbers);
// array shift
numbers.unshift(333);
console.log( "after unshift:" +numbers);

// array pop
var rmvElement= numbers.pop();
console.log(rmvElement);
console.log("after pop:" +numbers);
// array unshift
numbers.shift();
console.log("after shift:" +numbers);