
// digits in number

let number = 0;

function digits_in_number(num){
    let count =0;
    if(num == 0){
        return count+1;
    }
    else{
        while(num != 0){
            count++;
            num = Math.floor(num / 10);
            console.log(num)
        }
        return count;
    }



}

let count = digits_in_number(number);
console.log("The Total digits in the number is: ", count);