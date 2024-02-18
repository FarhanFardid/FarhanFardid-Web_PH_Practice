// Finding cheapest phone from Array of Phone Object

let phones = [
    {name: "samsung", camera: '12mp', color: 'red', price: '22000'},
    {name: "walton", camera: '8mp', color: 'blue', price: '12000'},
    {name: "nokia", camera: '10mp', color: 'silver', price: '32000'},
    {name: "iphone", camera: '16mp', color: 'gold', price: '90000'},
];

function CheapestPhone(list){

    let n= list.length;
    let cheapest = list[0].price;
    let brand;
    for(let i=0; i<n;i++){
        if(list[i].price < cheapest){
            cheapest = list[i].price;
            brand = list[i].name;
        }

    }
    return [brand,cheapest];
}

let result = CheapestPhone(phones);
console.log("The Cheapest phone price is: ", result[1], 'and the brand is: ', result[0]);