function leap_year(years){
    let result = [];
    for(var i=0; i < years.length; i++){
        let y = years[i];
        if( y % 4 == 0){
            result.push(y);

        }
    }
    return result;

}

var input = [2024, 1996, 2048, 2001, 1998 , 2023];
var output = leap_year(input);

console.log("The Leap year from the given input years are: ", output);