
// const loadData =() =>{
//     const url = 'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html'
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayData(data))
// }

// const displayData=(links) => {
//     console.log(links);
// }


document.getElementById('short_btn').addEventListener('click', function(){
      const inputText = document.getElementById('inputField').value;

  
        if(inputText.length === 0){
            console.log("Error !!! Please enter a valid URL");
            return;
        }

        else{
            const container = document.getElementById('result');

            const p = document.createElement('p');

               
                const url = 'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html'
                fetch(url)
                .then(res => res.json())
                .then(data =>  p.innerText = `The Shorten code is : ${data.result.short_link}`)
              

                container.appendChild(p); 
            
            }
         
       

            
        });

