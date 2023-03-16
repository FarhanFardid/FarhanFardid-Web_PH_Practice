
let count = 0;
document.getElementById('btn').addEventListener('click', function(){

   
    count++;
    document.getElementById('display').innerText = count;
    localStorage.setItem('count', count);






})
let prev = localStorage.getItem('count'); 
document.getElementById('display').innerText = prev;