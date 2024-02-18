// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13 ............

let fibo=[ 0, 1 ];
let numberCount = 8;
for(let i =2; i <= numberCount; i++){
    fibo[i] = fibo [i-1] + fibo[i-2]; 
}
console.log(fibo);

// Second way

function fibonacci(n){

    let series = [ 0 , 1 ];
    for(let i =2; i<=n; i++){
        series[i]= series[i-1] + series[i-2];
    }
    return series;


}

let number = 9;
let output = fibonacci(number);
console.log("The Fibonacci series is: ", output);