document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw_amount');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
   
    withdrawField.value = '';


// withdraw
const previousWithdrawField = document.getElementById('total_withdraw');
const previousWithdrawString = previousWithdrawField.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawString);

// balance update
const previousBalanceField = document.getElementById('total_balance');
const previousBalanceString = previousBalanceField.innerText;
const previousBalanceAmount = parseFloat(previousBalanceString);

if(withdrawAmount > previousBalanceAmount){
    alert("You don't have enough money to make the withdraw");
    return;
}


const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
previousWithdrawField.innerText = newWithdrawAmount;

// withdraw update


const newBalanceAmount = previousBalanceAmount - withdrawAmount;
previousBalanceField.innerText = newBalanceAmount;

})