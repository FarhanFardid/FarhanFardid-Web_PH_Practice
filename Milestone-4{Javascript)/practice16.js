// factorial 

function fact(number){

    let factorialResult = 1;
    for(var i=1; i <= number; i ++){
        factorialResult = factorialResult* i;
    }
    return factorialResult;
}

let input = 3;
let output = fact(input);
console.log("the factorial of the number ", input , " is : ", output );