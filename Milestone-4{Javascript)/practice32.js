// Object properties search 

let products = [
     {name:'mobile', price: 8000, color: 'red'},
     {name:'laptop', price: 80000, color: 'silver'},
     {name:'watch', price: 800, color: 'brown'},
     {name:'iphone', price: 20000, color: 'gold'},
    ];

    function matchedProduct(products,word){
let match = [];
        for(const product of products){
         if(product.name.toLowerCase().includes(word.toLowerCase())){
match.push(product);
         }
console.log(product);
        }
        return match;

    }

    let matchedPro = matchedProduct(products, 'mobile');
    console.log("The searched product details: ", matchedPro);