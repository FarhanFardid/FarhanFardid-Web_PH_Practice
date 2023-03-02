
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

// 8. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const empt = () => 79;
console.log(empt());

// 9. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const onepara = (n) => n/17;
console.log(onepara(4));
// 10. দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const ope1 = (a,b) => (a+b)/2;
console.log(ope1(7,7));

// 11. একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে।

const ope2 =(a, b) =>{
    a = a +7;
    b= b+7;
    let sum = a +b;
    return sum;
}

console.log(ope2(5,7));