
// login button events
document.getElementById('log-btn').addEventListener('click', function(){

  const user_email =document.getElementById('email').value;

  console.log(user_email);
  const user_pass = document.getElementById('pass').value;
  console.log(user_pass);
  if(user_email === "javascript@bank.com" && user_pass === "javascript"){
    
window.location.href ="bank_transaction.html";
  }
  else{
    alert("Invalid User Access");
  }

})