console.log("connected");
const loadData = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
   
}

const displayData = (countries) =>{
    const container = document.getElementById('container');
    container.innerHTML = '';
for(const country of countries){
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('col');
    countryDiv.innerHTML =`
    <div class="card h-100 border border-primary">
    <img src="${country.flags.png}" class="card-img-top w-100 h-75 p-3 border border-1 rounded-2 border-dark" alt="...">
    <div class="card-body text-center">
      <h3 class="card-title p-2 ">${country.name.common}</h3>
      <button onclick="loadModalData('${country.cca2}')" type="button" class="btn btn-primary p-2 " data-bs-toggle="modal" data-bs-target="#detailsModal">
  More Details Info
</button>
     
    </div>
  </div>
 
    `
    container.appendChild(countryDiv);
    console.log(country);

}



}

// loadData('europe');

document.getElementById('search_btn').addEventListener('click', function(){
    const area = document.getElementById('select_box').value;
    loadData(area);
    
})

const loadModalData = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then (res => res.json())
    .then(data => displayModal(data[0]))
}

const displayModal = (country) =>{

    document.getElementById('exampleModalLabel').innerText = country.name.common;
    document.getElementById('m-body').innerHTML = `
    <img src="${country.flags.png}" class="card-img-top w-100 h-75 p-3 border border-1 rounded-2 border-dark" alt="...">
    <h5 class="text-center p-2 m-1"> ${country.name.official}</h5>
    <p> Capital city: ${country.capital ? country.capital[0] : 'No Capital'}</p>
    <p> Continents: ${country.continents}</p>
    <p> Borders: ${country.borders}</p>    `
    
}