const number = "a";
if(!number){
    console.log('Falsy');
}
else{
    console.log("Truthy");
}

const money= 10;
let food;
money>80 ? food= 'biriynai': food='cha-biscut';
console.log(food);

const num = 50;
console.log(num + '');
const numstr = '50';
console.log(+num);

isActive = true;

function showUser(){
    console.log("Display User");
}

function hideUser(){
    console.log("Hide User");
}

isActive ? showUser(): hideUser();

// shortcut for ternary operator
isActive && showUser();
isActive || hideUser();