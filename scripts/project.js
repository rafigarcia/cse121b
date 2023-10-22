

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

// API URL for meal search
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  
  //Check if the input is empty
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`; //Message for the user
  } else {
    fetch(url + userInp) // fetch to request the information
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];

        if (!myMeal) {
          result.innerHTML = `<h3>Please try something else</h3>`;
        } else {
          let count = 1;
          let ingredients = [];
          for (let i in myMeal) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeal[i]) {
              ingredient = myMeal[i];
              measure = myMeal[`strMeasure` + count];
              count += 1;
              ingredients.push(`${measure} ${ingredient}`);
            }
          }
        //DOM to create the space where we can display the recipe
          result.innerHTML = `
            <img src=${myMeal.strMealThumb}>
            <div class="details">
                <h2>${myMeal.strMeal}</h2>
                <h4>${myMeal.strArea}</h4>
            </div>
            <div id="ingredient-con"></div>
            <div id="recipe">
                <pre id="instructions">${myMeal.strInstructions}</pre>
            </div>
            `;

          let ingredientCon = document.getElementById("ingredient-con");
          let parent = document.createElement("ul");

          ingredients.forEach((i) => {
            let child = document.createElement("li");
            child.innerText = i;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
          });
        }
      })
      .catch(() => { // if we can't find the ingredient, will display the message:
        result.innerHTML = `<h3>Please think in somenthing different</h3>`;
      });
  }
});