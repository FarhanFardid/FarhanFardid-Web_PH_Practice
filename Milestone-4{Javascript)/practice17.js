// factorial in a reverse way

function factorial ( number){
    if(number == 0 || number == 1){
        return 1;
    }
    else if(number < 0){
        return "factorial is only defined for non-negative number";
    }
    else{ 
    let result = 1;
    for (i=number; i > 0; i --){
        result = result * i;

    }
    return result;
    }
}

let input = 7; 
let output= factorial(input);
console.log("The factorial of  ", input , "in a reverse way  : ", output );