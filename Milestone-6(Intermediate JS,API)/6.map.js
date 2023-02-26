// for of loop
const numbers =[1,3,5,7,9];
let even=[];
for(let number of numbers){
    const num = number +1;
    even.push(num);
}

console.log(even);

// aray map

const ev_num = numbers.map(num => num + 1);
console.log(ev_num);

//  অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const res = numbers.map(x => x*5);
console.log(res);

//  [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const number_arr=[2,5,3,46,78,67,54,3,9];
const odd= number_arr.filter(x=> x%2);
console.log(odd);
