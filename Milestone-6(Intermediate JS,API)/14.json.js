const arr = [23,67,43,78,56];
const json_arr = JSON.stringify(arr);
const obj1= {name:'john', age:50};
const json_obj = JSON.stringify(obj1);
console.log(json_arr);
console.log(json_obj);

const obj2 = JSON.parse(json_obj);
console.log(obj2);