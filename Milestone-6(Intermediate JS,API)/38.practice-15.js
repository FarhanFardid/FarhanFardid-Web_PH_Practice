// Pass by value and pass by reference

let x = 45;
let y =60;

function sum(x,y){
    x = 70;
    let sum = x + y;
    return sum;

}

console.log(sum(x,y));
console.log(x,y);

let obj1 = {Fname: "john", Sname:"doe"};

function combine (str){
    return  str.Fname +' ' + str.Sname ;
}

obj1.Sname = 'Kabir';
console.log(combine(obj1));