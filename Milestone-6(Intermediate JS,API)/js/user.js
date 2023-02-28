function randomUser (){
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

function display(users){

   const pic= document.getElementById('pic');
   const img = document.createElement("IMG");
//    img.innertext = users.results[0].picture.large;
   img.setAttribute("src", users.results[0].picture.large);
   img.setAttribute("width", "150");
   img.setAttribute("height", "150");
   img.setAttribute("alt", "");
    pic.appendChild(img)
   
    document.getElementById('n-title').innerText = users.results[0].name.title;
    let fullName= users.results[0].name.first + ' ' + users.results[0].name.last;
   document.getElementById('name').innerText = fullName;
   document.getElementById('loc').innerText = users.results[0].location.country;
   console.log(users.results[0]);
    console.log(users.results[0].picture.large);
}


randomUser();