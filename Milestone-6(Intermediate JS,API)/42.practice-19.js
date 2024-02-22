// JSON Parse and Stringify

let player = {
name: "Tamim",
age: 35,
Jersey: 28,
teams: ['BD', 'PZ', 'FB', 'CV','RR','CC']

}

let format1 = JSON.stringify(player);
let format2 = JSON.parse(format1);
console.log(format1);
console.log(format2);