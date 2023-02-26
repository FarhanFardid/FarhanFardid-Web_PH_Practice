function quote(){
const url= 'https://api.kanye.rest';
fetch(url)
.then (res => res.json())
.then (data => display(data))
}

const display = data => {
    const bq= document.getElementById('quote');
    const div =document.createElement('div');
    console.log(data);
    div.innerText = data.quote;

    bq.appendChild(div);
}
quote();