const maximum = (arr1, arr2) =>{
    const arr_n= arr1.concat(arr2);
    console.log(arr_n);
    let max_num  = Math.max(...arr_n);
    return max_num; 

} 

const num1=[45,75,389,97,34];
const num2=[67,948,849,764,98] ;
console.log(maximum(num1,num2));