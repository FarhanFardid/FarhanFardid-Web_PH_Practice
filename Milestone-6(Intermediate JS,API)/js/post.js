function allPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then (res => res.json())
    .then (data => display(data))
 
}
const display = posts =>{
    const postContainer = document.getElementById('post-container');
    console.log(posts);
    for (const post of posts){
        const div =document.createElement('div');

        div.innerHTML = `
        <div class="border border-2 bg-primary m-2 p-2">
       <h4 class="p-3 m-1 text-center  ">User Id -${post.userId}</h4>
       <h5 class="p-3 m-1 text-center  ">Title- ${post.title}</h5>
        <p class="p-3 m-1 text-center  ">post- ${post.body}</p>
        </div>
        `
        
        postContainer.appendChild(div);
    }
   
}
