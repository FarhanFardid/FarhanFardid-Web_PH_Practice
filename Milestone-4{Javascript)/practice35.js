// Square, Sum and Average of an Array number
let numbers = [ 2, 4, 6, 8 ];
function Average(numbers){
let sq = [];
let sum=0;
for(let i=0; i<numbers.length; i++){
    let newNum = Math.pow(numbers[i],2);
    sq.push(newNum);
} 
console.log(sq);
let size = sq.length;
for(let i=0; i<size;i++){
    sum = sum + sq[i];
}
console.log(sum);
let avg = (sum / size);
console.log(avg);
return avg;

}

let result = Average(numbers);
console.log(result);