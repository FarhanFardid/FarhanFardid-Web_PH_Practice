arr1 =[23, 45, 67, 89];

const [x,y]=arr1;
console.log(x,y);

function arr2(num1, num2)
 {
    let nums =[num1, num2];
    return nums;
}

const [num1, num2 ] =arr2(34,68);
console.log(num1,num2);

const object1 = {
    name: 'John',
    age: 40,
    surName: 'Doe',
    address:{
        House: 'RedWood',
        block: 'B',
        cell: '01987636'
        }
};

const {name,age} = object1;
console.log(name,age);
const {House, block} = object1.address;
console.log(House, block);

let a =2;
let b=3;
const obj = {a,b};
console.log(obj);