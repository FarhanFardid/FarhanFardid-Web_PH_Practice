// Words reverse

let str3 = "I love to play cricket";
let splitedStr = str3.split(' ');
console.log(splitedStr);

let revStr = ' ';
for(let i= splitedStr.length-1; i>=0; i--){
    let word = splitedStr[i];
    revStr = revStr + ' ' + word;
}

console.log("The Reverse words fom the sentence are: ", revStr);


