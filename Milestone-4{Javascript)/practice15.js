// find odd numbers from array and calculate the sum of the odd numbers using two different function

function Odd(arr){
    let oddNumbers = [];
    for(var i =0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers; 

}

function sum(numbers){
    let sum =0;
    for(var i=0; i < numbers.length; i++){
        sum  = sum + numbers[i];
    }
    return sum;

}

let input = [23, 56, 89, 90, 65, 78, 12 ];
let returnValue = Odd(input);
console.log("The Return value is : ", returnValue);
let finalOutput = sum(returnValue);
console.log("The sum of the Odd numbers from the given input is: ", finalOutput); 
