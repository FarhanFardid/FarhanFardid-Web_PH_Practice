// String reverse 

// technique-1

let str1 = "I love my country";

let reverse = []; 
for (let i=str1.length-1; i>=0; i--){
    let letter = str1[i];
    reverse.push(letter);
    console.log(letter);
}
let revStr = reverse.join('');
console.log(reverse);
console.log("The reverse string is: ", revStr);

// Technique-2

let str2 = "I love my country";

let reverseStr = ' '; 
for (let i=str1.length-1; i>=0; i--){
    let letter = str1[i];
    console.log(letter);
    reverseStr = reverseStr + letter;
    
}

console.log(reverseStr);


