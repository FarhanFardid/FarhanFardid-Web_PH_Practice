// shopping cart product price Total

let cart = [
    {name:'pant', price: 500, quantity: 3},
    {name:'shirt', price: 600, quantity: 5},
    {name:'shoe', price: 900, quantity: 2}
];

function totalAmount(list){
    let total = 0;
    for(let i =0; i<list.length; i++){
let individualCost= list[i].price * list[i].quantity;
total = total + individualCost;
    }
    return total;

}

let payment = totalAmount(cart);
console.log("The Total Amount To pay TK: ",payment );