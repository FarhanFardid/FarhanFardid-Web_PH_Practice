
//1. function declaration
const result = function (val1, val2){
    const sum  = val1 + val2;
    return sum;
}


console.log(result(8,7));

//2. arrow function
const add = (first, second) => first + second;

console.log(add(6,7));

//3. arrow function with empty paramenter 
const add1 = () => 5 + 9;
console.log(add1());


//4. arrow function with single parameter
const doble = (x) => x*x;
console.log(doble(5));

// 5. multiple parameters
const add2 = (val1, val2,val3,val4) => {
    const sum = val1 + val2 + val3 + val4;
    return sum;
}
console.log(add2(5,6,6,9));

//6. একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const div = (x) => x/5;
console.log(div(10));

// 7. তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const mul = (x,y) => (x+2) *(y+2);
   
console.log(mul(5,7));

// 8.  এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const mul1 = (x,y,z) => x * y * z;
console.log(mul1(3,6,7));