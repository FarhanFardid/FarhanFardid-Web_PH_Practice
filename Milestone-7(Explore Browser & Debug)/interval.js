console.log(1);
console.log(2);
let num =0;
let intervalId =  setInterval(() => {

    console.log(++num);
    if(num === 10){
        clearInterval(intervalId);
    }

}, 500);

console.log(3);
console.log(4);

