// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loaddata(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => displaydata(data))

}
function displaydata(data){
    console.log(data);
}

function loaddata1(){
    const url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then (res => res.json())
    .then (data => displaydata1(data))
}

function displaydata1(data){
    console.log(data);
}

function loaddata2(){
    const url='https://jsonplaceholder.typicode.com/todos'
    fetch(url)
    .then (res => res.json())
    .then (data => displaydata2(data))
}

function displaydata2(data){
    console.log(data);
}