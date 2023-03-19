const arr1 =[12, 32, 43, 54, 65, 76, 87, 98, 09];

const dupArr = [...arr1, 45];
arr1.push(40);
console.log(arr1);
console.log(dupArr);

const arr = [
    {product: 'phone', brand:'iphone', price: 120000, year: 2023}, 
    {product: 'phone', brand:'Samsung', price: 100000, year: 2022}, 
    {product: 'phone', brand:'Oppo', price: 12000, year: 2021}, 
    {product: 'phone', brand:'Nokia', price: 20000, year: 2020}, 
    {product: 'phone', brand:'One plus', price: 150000, year: 2023} 
];
const newItem =  {product:'phone', brand:'Huawei', price: 130000, year: 2023};

const newArray = [...arr,newItem];
console.log(newArray);



