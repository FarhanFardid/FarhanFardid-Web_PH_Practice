

let i = 0;
function myTimer() {
 
  document.getElementById("display").innerHTML = i;
  i++;
}

document.getElementById('start').addEventListener('click',function(){

  intervalId =  setInterval(myTimer, 500);

})

document.getElementById('stop').addEventListener('click',function(){
  
  clearInterval(intervalId);
})


document.getElementById('reset').addEventListener('click',function(){

   document.getElementById('display').innerText = 0;
   i =0 ;

})
 
