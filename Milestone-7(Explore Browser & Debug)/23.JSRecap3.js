const arr = [
    {product: 'phone', brand:'iphone', price: 120000, year: 2023}, 
    {product: 'phone', brand:'Samsung', price: 100000, year: 2022}, 
    {product: 'phone', brand:'Oppo', price: 12000, year: 2021}, 
    {product: 'phone', brand:'Nokia', price: 20000, year: 2020}, 
    {product: 'phone', brand:'One plus', price: 150000, year: 2023}, 
];

const brands = arr.map(product => product.brand);
console.log(brands);
arr.forEach(element =>  console.log(element.year));
    
const cheap = arr.filter(product => product.price < 100000);
console.log(cheap);

const expensive =arr.find(product => product.price > 120000);
console.log(expensive);

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

const newItem ={product: 'phone', brand:'Lenovo', price: 10000, year: 2022}; 
const remainingItem = arr.filter(product => product.brand !== 'Oppo') ;
const addItem = [...remainingItem, newItem]
console.log(addItem);



const numbers =[3,4,5,6,7,8];
const result =numbers.map (number => number *2);
console.log(result);