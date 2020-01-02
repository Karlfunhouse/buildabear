var newOutfit = new Outfit(Date.now(), null, [], null);
var hatOptions = document.querySelector('.hat-button-container-js');
var clothesOptions = document.querySelector('.clothes-button-container-js');
var accessoriesOptions = document.querySelector('.accessories-button-container-js');
var backgroundOptions = document.querySelector('.background-button-container-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];

hatOptions.addEventListener('click', selectItems);
clothesOptions.addEventListener('click', selectItems);
accessoriesOptions.addEventListener('click', selectItems);
backgroundOptions.addEventListener('click', selectBackground);
saveForm.addEventListener('submit', submitForm);
saveForm.addEventListener('input', checkFormValid);
savedOutfitsContainer.addEventListener('click', removeCard);

getOutfits();

function displayActiveButtons() {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('button'));
  var items = newOutfit.garments.map(garment => garment.id);
  var background = newOutfit.background;
  var matches = buttons.filter(button => items.find(item => item === button.value) || button.value === background);
  buttons.forEach(button => button.classList.remove('active-item'));
  matches.forEach(match => match.classList.add('active-item'));
}
  
function displayImages() {
  var images = Array.prototype.slice.call(document.querySelectorAll('.image-absolute'));
  var items = newOutfit.garments.map(garment => garment.id);
  var background = newOutfit.background;
  var matches = images.filter(image => items.find(item => item === image.id) || image.id === background);
  images.forEach(image => image.classList.add('hidden'));
  matches.forEach(match => match.classList.remove('hidden'));
}

function selectItems() {
  if (event.target.classList.contains('active-item') && event.target !== event.currentTarget) {
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.classList[0]);
  } else if (event.target !== event.currentTarget) {
    newOutfit.removeGarment(event.target.classList[0]);
    newOutfit.addGarment({id: event.target.value, type: event.target.classList[0]});
  }
  displayActiveButtons();
  displayImages();
};

function selectBackground() {
  if (event.target != event.currentTarget && event.target.classList.contains('active-item')) {
    newOutfit.background = null;
  } else if (event.target !== event.currentTarget) {
    newOutfit.background = event.target.value;
  }
  displayActiveButtons();
  displayImages();
};

// Main function that fires when Save button is clicked.
function submitForm(event) {
  event.preventDefault();
  displayOutfitCard();
  saveCardTitle();
  storeOutfit(newOutfit);
  clearGarmentsArray();
  clearForm();
  clearBear();
  clearButtons();
  disableSaveButton();
}

function checkFormValid() {
  if (saveForm.checkValidity() === true) {
    saveButton.removeAttribute('disabled');
  }
};

function disableSaveButton() {
  saveButton.setAttribute('disabled', "");
}

function clearForm() {
  saveForm.reset();
}

function clearBear() {
  var outfitItems = document.querySelectorAll('.image-absolute');
  for (var i = 0; i < outfitItems.length; i++) {
    outfitItems[i].classList.add('hidden');
  }
};

function clearGarmentsArray() {
  newOutfit = new Outfit(Date.now(), null, [], null);
}

function clearButtons() {
  var activeButtons = document.querySelectorAll('.active-item');
  for (var i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active-item');
  }
}

function displayOutfitCard() {
  var cardId = newOutfit.id;
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
  savedOutfitsContainer.insertAdjacentHTML('afterbegin',
  `<div class="saved-outfit-card" id="${cardId}">
    <p>${cardTitle}</p>
    <i class="fas fa-times"></i>
  </div>`);
};

// Iterate through each item in saved outfits array,
// Grab the card title of each item & save it as a variable,
// Grab the parent container to load into,
// Insert card HTML into DOM
function loadOutfitCard() {
  for (var i = 0; i < savedOutfits.length; i++) {
    var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
    var cardTitle = savedOutfits[i].title;
    var key = localStorage.key([i]);
    savedOutfitsContainer.insertAdjacentHTML('beforeend',
    `<div class="saved-outfit-card" id="${key}">
      <p>${cardTitle}</p>
      <i class="fas fa-times"></i>
    </div>`);
  }
}

loadOutfitCard();

function saveCardTitle() {
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  newOutfit.title = cardTitle;
}

function storeOutfit(outfit) {
  window.localStorage.setItem(outfit.id, JSON.stringify(outfit));
}

// Immediately invoke the function, so that it fires on page load
// Loop through the entire length of the localStorage array,
// Grab the key of each item in the array,
// Call the getItem method to retrieve each item's data by using our respective localStorage key,
// Turn the data from a string back into an object using JSON.parse,
// Push the retrieved object into our saved outfits array!
function getOutfits() {
  for (var i = 0; i < localStorage.length; i++) {
    var outfitKey = localStorage.key([i]);
    var outfit = JSON.parse(window.localStorage.getItem(outfitKey));
    savedOutfits.push(outfit);
  }
};

function removeCard() {
  var outfitCard = event.target.parentNode;
  console.log(outfitCard);
  if (event.target.classList.contains('fa-times')) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    clearOutfitCard(outfitCard);
  }
}

function clearOutfitCard(card) {
  for (var i = 0; i < localStorage.length; i++) {
    var outfitKey = localStorage.key([i]);
    if (outfitKey === card.id) {
      localStorage.removeItem(outfitKey);
    }
  }
}