var prices = [ 560, 789, 836, 647, 765, 970, 564, 323, 543];

for(var i=0; i < prices.length; i++){
    var price = prices[i];
    if(price > 750){
        continue;
    }
    console.log(price);
}

var cars = ['BMW', 'Mercedez', 'Volvo', 'Toyota', 'Honda' ];
for(var c = 0; c<cars.length; c++){
    var car = cars[c];
    if(car == "Honda"){
        break;
    }
    console.log(car);
}