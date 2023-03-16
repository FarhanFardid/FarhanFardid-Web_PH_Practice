// const input = prompt("Enter a number: ");
// console.log(input);
// const result = parseInt(input) + 200;
// alert("The output is :" + result);

const userValue = confirm("Do you want to show the location of this webPage?");

if(userValue){
    console.log(window.location.href);
}
else{
    alert("I don't want to show tha location");
}