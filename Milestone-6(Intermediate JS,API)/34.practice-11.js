// Closure

function stopWatch(){
    let counter =0 ;
    return function (){
        counter++;
       return counter;
    }
}

let watch1 = stopWatch();
let watch2 = stopWatch();
console.log(watch1()); 
console.log(watch1()); 
console.log(watch1()); 
console.log(watch2()); 
console.log(watch2()); 