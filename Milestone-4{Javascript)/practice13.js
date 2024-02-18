function even_odd(number){
    if(number % 2 == 0){
        return 'even';
    } 
    else 
    return 'odd';

}

var input = 48;

var output = even_odd(input);
console.log("The Number is an", output , 'number');