function getInputValue(input){
    const inputField = document.getElementById(input);
    const AmountString = inputField.value;
    const Amount = parseFloat(AmountString);

    inputField.value = '';
    
    return Amount;
}

function getElementValue(input){
    const elementField = document.getElementById(input);
    const elementString = elementField.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
function setElementValue(input, value){
    const element =document.getElementById(input);
    element.innerText = value;
}

// deposit button function

document.getElementById('deposit_btn').addEventListener('click', function(){
  const depositAmount =  getInputValue('deposit_amount');
  if(depositAmount < 0){
    alert("You have to deposit a non negative amount must");
   
    return;}

  const previousDeposit = getElementValue('total_deposit');
// update deposit
  const newDeposit = previousDeposit + depositAmount;
  setElementValue('total_deposit', newDeposit);
//    update balance
 const previousBalance = getElementValue('total_balance');
 const newBalance = previousBalance + depositAmount;

 setElementValue('total_balance', newBalance);
  

});

document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw_amount');
    const previousWithdraw = getElementValue('total_withdraw');
    const previousBalance = getElementValue('total_balance');

    if(withdrawAmount > previousBalance){
        alert("You don't have enough money to withdraw ");
        return;
    }
    const newWithdraw = previousWithdraw + withdrawAmount;
    setElementValue('total_withdraw', newWithdraw);

   

    const newBalance = previousBalance - withdrawAmount;
    setElementValue('total_balance', newBalance); 
})
