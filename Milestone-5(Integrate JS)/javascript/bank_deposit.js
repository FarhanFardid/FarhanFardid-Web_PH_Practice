document.getElementById('deposit_btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit_amount');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    depositField.value = '';
    if(depositAmount < 0){
        alert("You have to deposit a non negative amount must");
       
        return;
        
    }
    


// deposit update

    const previousDepositField =document.getElementById('total_deposit');
    const previousDepositString = previousDepositField.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);

    const newDepositAmount = previousDepositAmount + depositAmount;
    previousDepositField.innerText = newDepositAmount;


    // balance update

   const previousBalanceField = document.getElementById('total_balance');
   const previousBalanceString = previousBalanceField.innerText;
   const previousBalanceAmount = parseFloat(previousBalanceString);

   const newBalanceAmount = previousBalanceAmount + depositAmount;
   previousBalanceField.innerText = newBalanceAmount;
})