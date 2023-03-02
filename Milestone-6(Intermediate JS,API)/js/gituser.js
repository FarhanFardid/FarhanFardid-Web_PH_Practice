const loadData = () =>{
    const url = 'https://api.github.com/users?per_page=10'
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
} 

const displayData= (users) => {
    const userContainer=document.getElementById('user_container');
    for(const user of users){
    const userDiv = document.createElement('div');
    userDiv.classList.add('col');
    userDiv.innerHTML = `
      <div class="card">
    <img src="${user.avatar_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.login}</h5>
      <p class="card-text">Github : ${user.html_url}</p>
    </div>
  </div>`

 userContainer.appendChild(userDiv);
    }
console.log(users);

}

loadData();