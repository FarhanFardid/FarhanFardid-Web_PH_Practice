// Object call, apply, bind

let car1 = {
    model: "Accord 1900",
    brand: "Honda",
    year: 2024,
    View(price){
        return (`The price  of ${this.model}  is $${price}`);
    }
};

let car2 = {
    model:"Civic 1800",
    brand:"Honda",
    year: 2023,

};

let price1 = car1.View(500);
let price2 = car1.View.call(car2,6000);
let price3 = car1.View.apply(car2,[8000]);
let price4 = car1.View.bind(car2);
let finalPrice = price4(9000);
console.log(car1);
console.log(price1);
console.log(car2);
console.log(price2);
console.log(price3);
console.log(finalPrice);
