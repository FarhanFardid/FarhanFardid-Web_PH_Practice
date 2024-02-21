// Calculating the average of the sum of the square of an array using arrow function
let  numbers = [ 3, 2, 4, 6, 8 ];

const sqSumAvg = (arr) =>{
    let square = [];
    for(let n of arr){
        let sq = Math.pow(n,2);
        square.push(sq);
        
    }
    console.log(square);
    let sum = 0;
    for(let n of square){
        sum = sum + n;
    }
    
    let count = square.length;
    let avg= (sum / count).toFixed(2);
    return avg;
}

let result = sqSumAvg(numbers);
console.log("The Average of the Sum of the square of the array is: ", result);