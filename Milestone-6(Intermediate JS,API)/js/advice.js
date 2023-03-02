const loadData = ()=>{
    const url= ' https://api.adviceslip.com/advice'
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData =(advice) =>{
    const advContainer = document.getElementById('adv_container');
    const advDiv = document.createElement('div');
    advDiv.innerHTML=`
        <h4 class="p-2"> Advice # ${advice.slip.id}  </h4>
        <p> ${advice.slip.advice}</p>    
    `
advContainer.appendChild(advDiv);
}
loadData();