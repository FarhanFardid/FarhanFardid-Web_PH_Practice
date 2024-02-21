// array and object destructuring

let cars = [ 'BMW',  'Toyota', 'Volvo','Mercedez Benz' ];
let person = {
    name: "John",
    age : 28,
    job: "Web Developer"
};

let [ first, second] = cars;
let {name, age} = person;

console.log("My first choice of car is", first , "& second choice is", second);
console.log( name, "is ", age ,"years old");