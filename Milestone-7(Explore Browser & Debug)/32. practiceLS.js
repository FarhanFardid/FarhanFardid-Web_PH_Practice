console.log("Connected");

const addBtn = document.getElementById('btn');
addBtn.addEventListener("click",function (){
    const productField = document.getElementById('product');
const quantityField = document.getElementById('quantity');

const product = productField.value;
const quantity = quantityField.value;
productField.value =' ';
quantityField.value = ' ';
    displayProduct(product,quantity);
    addDataToDB(product,quantity);
})

function addDataToDB (product,quantity){
    const cart = getStoredCart();
    cart[product] = quantity;
cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
  console.log(cartStringified);

}

const getStoredCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const loadDataFromDB = ()=>{
    const savedCart = getStoredCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product,quantity);
    }
    console.log(savedCart);
}

const displayProduct = (product, quantity) =>{
    const proList = document.getElementById("pro_list");
    
    const li = document.createElement("li");
    li.innerHTML=`
    ${product} : ${quantity} `;
    proList.appendChild(li);
} 
loadDataFromDB();
