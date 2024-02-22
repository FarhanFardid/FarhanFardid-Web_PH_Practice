
// 1. Basic Fetch Techniques

// const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url)
// .then (res => res.json())
// .then (data => displayData(data));

// function displayData(data){
//     console.log(data);
// }


// 2. Fetching data using async and await Techniques

const loadData = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res= await fetch(url);
    const data = await res.json();
    loadedDataDisplay(data);
}

function loadedDataDisplay(loadedData){
    for(let data of loadedData){
        console.log(data);
    }
   
}
loadData();