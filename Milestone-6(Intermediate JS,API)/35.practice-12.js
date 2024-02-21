// object loop

let book = {
    id: 1,
    name: "Islam in Life",
    author: "Arif Azad",
    year: 2024
    
};
for(let i in book){
    console.log( i , '-' , book[i]);
}
let keys = Object.entries(book);
for(let i of keys){
    console.log(i);
}
// console.log(keys);