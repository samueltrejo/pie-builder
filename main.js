let ingredients = []
let ingredientCounter = 1;

const deleteIngredient = (event) => {
  const buttonId = event.target.id;
  ingredients.forEach((ingredient, index) => {
    if(ingredient.id === buttonId) {
      ingredients.splice(index, 1);
    }
  })
  domStringBuilder(ingredients);
  addDeleteEvents();
}

const addDeleteEvents = () => {
  const deleteButtons = document.getElementsByClassName('delete');
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteIngredient);
  }
}

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card col-3">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${item.item}</h5>`;
    domString += `    <button id=${item.id} class="btn btn-dark delete">Delete</button>`;
    domString += `  </div>`;
    domString += `</div>`;
  })
  printToDom('ingredients-container', domString);
}

const addIngredient = (event) => {
  event.preventDefault()
  const ingredient = {};
  ingredient.item = document.getElementById('ingredient').value;
  ingredient.id = `ingredient${ingredientCounter}`
  ingredients.push(ingredient);
  ingredientCounter++;
  domStringBuilder(ingredients);
  addDeleteEvents();
  document.getElementById('ingredient').value = '';
}

const addEventListeners = () => {
  document.getElementById('add-ingredient').addEventListener('click', addIngredient);
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
}

const init = () => {
  addEventListeners()
}

init();