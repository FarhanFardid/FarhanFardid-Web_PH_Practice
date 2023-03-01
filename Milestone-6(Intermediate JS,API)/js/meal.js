function loadMeal(){
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
    fetch(url)
    .then(res => res.json())
    .then (data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const foodContainer = document.getElementById('food_container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Category: ${meal.strCategory}</p>
        </div>
      </div>
        `
        foodContainer.appendChild(mealDiv);


        console.log(meal);
    })
}

loadMeal();