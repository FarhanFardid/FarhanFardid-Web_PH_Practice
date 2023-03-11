const getData = new Promise ((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);

    if(num>4){
        resolve("Number greater than 4");
    }
    else{

        reject('Number Less than 4');
    }
})

 getData
      .then(data => console.log(data))
      .catch(error => console.log(error))