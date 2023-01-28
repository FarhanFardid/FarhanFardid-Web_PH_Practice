var num1 = 300;
var num2=79;
var num3 = 45;

if(num1 > num2 )
{
    if(num1 > num3){
        console.log("The Largest number is num1: " + num1);
    }
    else{
        console.log("The Largest number is num3: " + num3);
    }
}
else if(num2 > num3){
    console.log("The Largest number is num2: " + num2);
}
else{
    console.log("The Largest number is num3: " + num3);
}