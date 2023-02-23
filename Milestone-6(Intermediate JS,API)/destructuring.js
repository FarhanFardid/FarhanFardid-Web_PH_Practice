// object destrcturing
// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
const cars ={
    brand: 'BMW',
    model: 'X-200',
    year: 2022,
    Cc: 4500
}

const {brand,year} = cars;
console.log(brand,year);

const {name, age}= {name: 'john', age: 70, country: 'USA'};
console.log(name, age);

// array desturucturing

const numbers =[70,57,438,34,93,80];

const[val1, val2] =numbers; 
console.log(val1,val2);

const car_brand =['BMW', 'Mercedez', 'Lambo', 'Porsche'];
const [champion,runner_up,third_pos] = car_brand;
console.log(`1st car is ${third_pos} 2nd car is ${runner_up} and 3rd car is ${champion}` );




// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const [a,b,three] = car_brand;

console.log(three); 