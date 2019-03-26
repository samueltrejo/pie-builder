let ingredients = []

const addIngredient = () => {
  let domString = document.getElementById('ingredient').value
  printToDom('ingredients-container', domString)
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