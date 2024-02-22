// Object Comparison

let obj1 = { a:2, d:8, b:5 };
let obj2 = { a:2, b:5, c:8 };

let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);
for(let key of keys1){
    if(obj1[key] === obj2[key]){
        console.log("Objects are same");
    }
    else{
        console.log("Objects are not same");
    }
}
console.log(keys1);
console.log(keys2);