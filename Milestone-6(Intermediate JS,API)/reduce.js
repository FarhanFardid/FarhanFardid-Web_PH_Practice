// using for of loop
const numbers =[1,9,17,22];
let sum =0;
for(number of numbers){
const num = number;
sum = sum+num;
}

console.log(sum);
// array.reduce
const red_val = numbers.reduce((previous, current) => previous + current, 0);
console.log(red_val);

// array of obejcts

const peoples =[
    {name:'Rina', age: 23},
    {name:'Meena', age: 21},
    {name:'Geeta', age: 22},
];
// using for of loop
let sum1 =0;
for(let people of peoples){
   const age = people['age'];
   sum1 = sum1 + age;

}
console.log(sum1);

// arrray reduce
//  arr.reduce((a, b) => ({x: a.x + b.x}));
const s_age = peoples.reduce((a, b) => (a + b.age),0);

console.log(s_age);

// obj notation

const student ={
    name: 'Fridie',
    age: 20
};

console.log(student.age);

let data ={
    location: [
        {
        latitude: '40.5 , 50.5',
        city:'Hydrabad',
        country: 'India'
        }
    ]
};

const city = data.location[0].city;
console.log(city);