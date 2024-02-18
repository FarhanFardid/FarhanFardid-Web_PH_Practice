// Ticket problem 100 tk for first 100 ticket, 90 tk for 101-200 tickets and 70 tk for more than 200 tickets

let Tickets = 250;

function totalCost (n){
    if(n<=100){
        return n*100;
    }
    else if(n>100 && n<=200){
        let first100price= 100 *100;
        let second100price = (n-100)*90;
        let payable = first100price + second100price;
        return payable;
    }
    else{
        let first100p = 100*100;
        let second100p = 100 * 90;
        let restPrice = (n-200) * 70; 
        let payable2 = first100p + second100p + restPrice;
        return payable2;
    }

}

let cost = totalCost(Tickets);
console.log("Total cost for ", Tickets ,' Tickets are: ', cost);
