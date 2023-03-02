//1. object create with literals
const person = {};
person.name = 'Roy';
person.age = 35;

console.log(person);

const student = {
    name: 'Jason',
    age: 40, 
    profession: function (){
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }

}
console.log(student);
student.profession();

// 2. Object  constructor

const person1 = new Object();
console.log(person1);

// 3. Object Create Method
const item = Object.create(student);
console.log(item.name);

// 4. class

class person2 {
    name = 'Mark Wood'
    address = '15/A,East London'
    constructor(age){
        this.age = age;
    }
}
const personDetails = new person2(40);
console.log(personDetails);

// 5. function

function student1(id , grade)
{
    this.id = id;
    this.grade =grade;

}

const std1= new student1(5, 9);
console.log(std1);



const person3={
    name: 'Buttler',
    age: 35,
    money: 5000,
    treat: function (amount, trt){
        this.money = this.money - amount -trt;
        return this.money;
    }
} 

const output = person3.treat(1200, 100);

const output1 = person3.treat(1100, 50);

console.log(output); 

console.log(output1); 

const key  = Object.keys(person3);
console.log(key);
const value  = Object.values(person3);
console.log(value);

const pair  = Object.entries(person3);
console.log(pair);

for(const [key, value] of Object.entries(person3)){
    console.log(key, value);
}

const badam = {
    name: 'badam',
    money: 8000
}

const remain = person3.treat.call(badam, 500, 50);
console.log(remain);

// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const obj1 ={
    name: 'CR7',
    age: 38,
    cars:['bmw', 'porsche', 'lambo'],
    address:{
        house: 20,
        road: 2,
        location:'madrid',
        country: 'spain'
          },
       msg1 : function(){
        console.log(`${this.name} is ${this.age} years old and he lives in ${this.address.country} and he has cars of this brands ${this.cars[2]}`)
    }
}

console.log(obj1.msg1());