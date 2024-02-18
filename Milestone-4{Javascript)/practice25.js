// Remove duplicate from array

let arr1= [ 23, 45, 67, 57, 23, 67, 97, 67, 45, 99, 34 ];

function removeDuplicate(numbers){
let newArr = [];
for(let i =0; i<numbers.length;i++){
    let num = numbers[i];

    if(!(newArr.includes(num)) ){
 newArr.push(num);
    }
}
return newArr;
}

let output = removeDuplicate(arr1);
console.log("The array without duplicate value is: ", output);