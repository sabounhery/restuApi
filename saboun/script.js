// initialisation

let button = document.querySelector(".btn");
let container = document.querySelector(".container");
const image = document.querySelector(".image");

// fetch API
function renderRecipe(data) {
  container.innerHTML = "";
  const meal = data.meals[0];
  console.log(meal);
  const image = meal.strMealThumb;

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      const html = `
      <p class="ingredient">${ingredient} - ${measure}</p>
      `;
      container.insertAdjacentHTML("afterend", html);
    }
  }
  const html = `
  <div class="frontpage">
    <img src="${image}" alt="${meal.strMeal}" class="img" />
    <h2 class='title'>${meal.strMeal}</h2>
    <span class='area'>${meal.strArea} plate</span>
    <p class="category" strMeasure1">Category : ${meal.strCategory}</p>
    <p class="instruction" strMeasure1">${meal.strInstructions}</p>
    <div class='margin'><a class="youtube-link" href="${meal.strYoutube}" target="_blank" strMeasure1">Recipe On Video</a></div>
    <br />
  </div>`;
  container.insertAdjacentHTML("beforeend", html);
}

const randomRecipe = () => {
  // Appel de l'API
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    // On transforme les données brutes en json
    .then((res) => res.json())
    // On recupere la data au format json
    .then((data) => {
      renderRecipe(data);
    });
};

// au clic sur le bouton on appel rzndom<rcipe

button.addEventListener("click", function () {
  randomRecipe();
});
