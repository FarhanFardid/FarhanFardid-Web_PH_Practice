function average(arr){
    console.log(arr);
    let count = arr.length;
    let sum = 0;

    for( var  i =0; i < count; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
 let avg = sum/count;
 return avg;
}

var number = [56, 76, 45, 89, 90, 45 ];

var result = parseFloat(average(number).toFixed(2));

console.log("The average of the numbers of array is: ", result);