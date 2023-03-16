document.getElementById('btn').addEventListener('click', function(){
     const productField = document.getElementById('product_name');
     const quantityField= document.getElementById('product_quantity');

     const product = productField.value;
     const quantity = quantityField.value;
     productField.value='';
     quantityField.value='';

     displayProduct(product, quantity);
    setToLocalStorage(product, quantity);
     console.log(product,quantity);


})

const displayProduct = (product,quantity)=>
{
    const container = document.getElementById('list_container');
    const li = document.createElement('li');
    li.innerHTML =`${product}: ${quantity}`;
    container.appendChild(li);

}
const getCartDetails = ()=>{
    let cart = {};
    const cartDetails = localStorage.getItem('cart');
    if(cartDetails){
        cart = JSON.parse(cartDetails);
    }
    return cart;
}


const setToLocalStorage =(product, quantity)=>{
    const cart = getCartDetails();
    cart[product]=quantity;
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart', cartStr) ;

}

const showSavedCart = ()=>{

    const savedCart = getCartDetails();
    for(product in savedCart){
        const quantity = savedCart[product];
        console.log(product);
    
        displayProduct(product,quantity);

    }

}

showSavedCart();
//   const results = getResultDetails();
  
//   const resultsStr = JSON.stringify([...results,  {
//     marks: totalMark,
//     examTime: timeTaken.innerText,
//     status: grade.status,
//   },
// ]);
//   localStorage.setItem('results', resultsStr) ;
// const getResultDetails = ()=>{
//   let results = [];
//   const storage = localStorage.getItem('results');
//   if(storage){
//       results = JSON.parse(storage);
//   }
//   return results;
// }