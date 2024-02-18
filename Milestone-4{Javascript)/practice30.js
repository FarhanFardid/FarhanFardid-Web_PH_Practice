// Remove negative numbers from array

let numbers= [23, -89, -45, 34, 67, -21, 56 ];

function posNumber(list){

    let positive = [];
    for(let i=0; i < list.length; i++){
        let num = list[i];
        if(num > 0){
            positive.push(num);
        }
    } 
    return positive;
}

let result = posNumber(numbers);
console.log("the Array after removing the negative number is: ", result); 