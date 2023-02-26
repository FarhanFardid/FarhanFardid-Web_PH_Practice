function LoadUsers(){
    const url= 'https://jsonplaceholder.typicode.com/users';
    fetch (url)
    .then (res => res.json())
    .then (data => displayUsers(data))
}

function displayUsers(users){
    const listContainer = document.getElementById('list_container');
    for (const user of users){
        const li = document.createElement('li');
        li.innerText =  user.name;
         listContainer.appendChild(li);
        
    
    }
}