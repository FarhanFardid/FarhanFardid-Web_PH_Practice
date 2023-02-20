
// function declaration
const result = function (val1, val2){
    const sum  = val1 + val2;
    return sum;
}


console.log(result(8,7));

// arrow function
const add = (first, second) => first + second;

console.log(add(6,7));

//arrow function with empty paramenter 
const add1 = () => 5 + 9;
console.log(add1());


// arrow function with single parameter
const doble = (x) => x*x;
console.log(doble(5));


const add2 = (val1, val2,val3,val4) => {
    const sum = val1 + val2 + val3 + val4;
    return sum;
}
console.log(add2(5,6,6,9));