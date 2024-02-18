// Factorial using Recursive function
let number =5;
function factorial(n){
    if (n == 1 ){
        return 1;
    }
    return n * factorial(n-1);
} 


let result = factorial(number);
console.log("The factorial of", number , "is : ", result);
