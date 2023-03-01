// const loadMeal = (textSearch) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`
//     fetch(url)
//     .then(res => res.json())
//     .then (data => displayMeals(data.meals))
//     .catch(error => console.log(error))
//     }

    const loadMeal = async(textSearch) => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`
      try {
        const res =  await fetch(url);
      const data = await res.json();
      displayMeals(data.meals);
      }
      catch(error){

        console.log(error);
      }
      

    }

const displayMeals = meals =>{
    const foodContainer = document.getElementById('food_container');
    foodContainer.innerHTML= '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card border border-2 rounded-4">
        <img src="${meal.strMealThumb}" class="card-img-top p-3 border border-primary rounded-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Category: ${meal.strCategory}</p>
          <button onclick ="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">
  Details
</button>
        </div>
      </div>
        `
        foodContainer.appendChild(mealDiv);


        console.log(meal);
    })
}
document.getElementById('btn').addEventListener('click', function(){

  const searchText = document.getElementById('search').value;
  console.log(searchText);
  loadMeal(searchText);
} )

const loadMealDetails = idMeal => {
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then (res => res.json())
  .then(data => displayMealDetails(data.meals[0]))
 
  
}


const displayMealDetails = (meals) =>{

document.getElementById('exampleModalLabel').innerText = meals.strMeal;
const mBody = document.getElementById('m-body');
mBody.innerHTML=`
       <img src = "${meals.strMealThumb}" class= "img-fluid p-2">
       <p class="p-3 m-2 ">Instruction: ${meals.strInstructions}</p>

`
}
loadMeal('rice');