function countries(){
    const url ='https://restcountries.com/v3.1/all';
    fetch(url)
    .then (res => res.json())
    .then (data => display(data))

}

function display (countries){
    const container = document.getElementById('country-container');
     
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('block');
        div.innerHTML =`
        <h2> Name : ${country.name.common} </h2>
        <p> Official Name: ${country.name.official}</p>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital' }</p>
        <button onclick ="countryDetails('${country.cca2}')"> Details </button>
        `
        container.appendChild(div);
        console.log(country)
    });
    
}
 function countryDetails(code){
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then (res=> res.json())
    .then (data => displayDetails(data[0]))
   
 }

 function displayDetails(country){
    const d_container = document.getElementById('country-details');

   
    d_container.innerHTML =`
    <h4>Name: ${country.name.common} </h4>
    <p>Continents: ${country.continents} </p>
    <img src="${country.flags.png}" alt="">
    `
 }
countries();