let ingredients = []

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card col-3">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${item.item}</h5>`;
    // domString += `    <a href="#" class="btn btn-primary">Go somewhere</a>`;
    domString += `  </div>`;
    domString += `</div>`;
  })
  printToDom('ingredients-container', domString);
}

const addIngredient = (event) => {
  event.preventDefault()
  const ingredient = {};
  ingredient.item = document.getElementById('ingredient').value;
  ingredients.push(ingredient);
  domStringBuilder(ingredients)
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