// optional chaining

let cars = {
    brand : "BMW",
    country: "Germany",
    model: [
        {
            name: 'i708',
            year: 2020,
            price: '$5000'
        },
        {
            name: 'I900',
            year: 2022,
            price: '$7000'
        }
    ]
}

let latestPrice = cars?.model[1]?.price;
console.log(latestPrice);