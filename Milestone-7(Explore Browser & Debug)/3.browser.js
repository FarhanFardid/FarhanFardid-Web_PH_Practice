function alertFunction() {

alert("This is inside the alert bar");

}
function confirmFunction(){
  const result =confirm("This is from the confirm bar. provide Yes or No");
   
  if(result === true){
    alert("Everything is Ok");
  }
else{
    alert("Not Ok");
}
}

function promptFunction(){
    const name = prompt("Enter yor name: ");

    if(name === null){
        alert("Please enter your name");
    }
    else{
        alert("welcome to JavaScript prompt" + ' ' +name );
    }
}