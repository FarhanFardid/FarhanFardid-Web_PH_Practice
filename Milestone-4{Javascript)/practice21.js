// Largest and lowest number from array

let numbers = [34, 56, 90, 64,  76, 23, 1, 344];

function LargestNum(arr){
    let big = arr[0];
    for(var i=0; i<arr.length; i++){
        let cNum = arr[i];
        if(cNum > big){
            big = arr[i];
        }

    }
    return big;

}

function SmallestNum(arr){
    let small = arr[0];
    for(var i=0; i <arr.length; i++)
{
    let cNum = arr[i];
    if(cNum < small){
        small= arr[i];
    }
}
return small;
}

let largeNum = LargestNum(numbers);
let SmallNum = SmallestNum(numbers);

console.log("The largest number of the Array is: ", largeNum);
console.log("The smallest number of the array is: ", SmallNum);