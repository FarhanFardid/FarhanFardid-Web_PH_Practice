const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];
 
  function showImg1 (){
let img1Container = document.getElementById('img1');
img1Container.innerHTML = `<img src= "${data[0].imageURL}" class="card-img-top" alt="image1">` 

  }

  function showImg2 (){
    let img2Container = document.getElementById('img2');
    img2Container.innerHTML = `<img src= "${data[1].imageURL}" class="card-img-top" alt="image1">` 
    
      }

showImg1();


  document.getElementById('card1_title').innerText = data[0].name;
  document.getElementById('card1_body').innerText = data[0].description;
  document.getElementById('card1_btn').innerText = data[0].price;

  document.getElementById('card2_title').innerText = data[1].name;
  document.getElementById('card2_body').innerText = data[1].description;
  document.getElementById('card2_btn').innerText = data[1].price;
  showImg2();