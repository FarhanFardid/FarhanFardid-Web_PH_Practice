// Js Object Looping

var cars = {
   brand: "BMW",
    model: "i-788",
    year: 2024,
    price: '30000 $'

}
let properties = Object.keys(cars);
let values = Object.values(cars);

console.log("The Properties are:  ", properties);
console.log("The Values are:  ", values);

let Brand = cars.brand;
let model = cars['model'];
console.log("the Brand is : ", Brand);
console.log("the Model is : ", model);

// Using for Loop  

for(let i =0; i < properties.length; i++){
    let prop = properties[i];
    // console.log(prop); 
    let val = cars[prop];
    // console.log(val); 
    console.log( prop , '=' , val); 

}
console.log("Using For In loop");
// using for in loop

for(var car in cars){
    console.log(car , '=' , cars[car]);
}