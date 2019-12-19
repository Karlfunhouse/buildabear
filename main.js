var newOutfit = new Outfit(Date.now(), null, [], null);
var hatOptions = document.querySelector('.hat-button-container-js');
var clothesOptions = document.querySelector('.clothes-button-container-js');
var accessoriesOptions = document.querySelector('.accessories-button-container-js');
var backgroundOptions = document.querySelector('.background-button-container-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');

hatOptions.addEventListener('click', selectHat);
clothesOptions.addEventListener('click', selectClothes);
accessoriesOptions.addEventListener('click', selectAccessories);
backgroundOptions.addEventListener('click', selectBackground);
saveForm.addEventListener('submit', submitForm);
saveForm.addEventListener('input', checkFormValid);

// visually displays active button in DOM on button click by adding active-item class
function makeActiveItem(item) {
  item.classList.add('active-item');
}

// clears previously active button when new button is clicked in same category by removing active-item class
function removeActiveItem(item) {
  if (item != null) {
    item.classList.remove('active-item');
  }
}

// grabs array of all images in a category, then loops through array and looks for a matching image based on the buttonId passed.
// displays the image with the matching buttonId.
function displayImage(imageCategory, buttonId) {
  var imageCategoryArray = document.querySelectorAll(`.image-${imageCategory}`);
    for (var i = 0; i < imageCategoryArray.length; i++) {
      if (buttonId.value == imageCategoryArray[i].id) {
        imageCategoryArray[i].classList.remove('hidden');
      }
    }
}

// grabs array of all images in a category, then loops through array and looks for an image that does not have the 'hidden' class, then makes that image hidden.
// this works because only one image from each category should be displayed at a time.
function removeImage(imageCategory) {
  var imageCategoryArray = document.querySelectorAll(`.image-${imageCategory}`);
  for (var i = 0; i < imageCategoryArray.length; i++) {
    if (!imageCategoryArray[i].classList.contains('hidden')) {
      imageCategoryArray[i].classList.add('hidden');
    }
  }
}

// THIS COMMENT APPLIES TO ALL 'select...' FUNCTIONS BELOW
// this function is the event handler for its respective category.
// on button click, if the event.target is not active it will be made active, the respective image will be displayed, and the respective item will be passed into the object's garments array.
// if the button is active, it will be deselected and the item will be removed from the garments array + removed from DOM bear display.
function selectHat() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    removeImage('hats');
    displayImage('hats', event.target);
    var activeHat = hatOptions.querySelector('.active-item');
    removeActiveItem(activeHat);
    makeActiveItem(event.target);
    if (activeHat != null) {
      newOutfit.removeGarment(activeHat.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    removeImage('hats');
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
}

function selectClothes() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    removeImage('clothes');
    displayImage('clothes', event.target);
    var activeClothes = clothesOptions.querySelector('.active-item');
    removeActiveItem(activeClothes);
    makeActiveItem(event.target);
    if (activeClothes != null) {
      newOutfit.removeGarment(activeClothes.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    removeImage('clothes');
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
}

function selectAccessories() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    removeImage('accessories');
    displayImage('accessories', event.target);
    var activeAccessories = accessoriesOptions.querySelector('.active-item');
    removeActiveItem(activeAccessories);
    makeActiveItem(event.target);
    if (activeAccessories != null) {
      newOutfit.removeGarment(activeAccessories.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    removeImage('accessories');
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
};

function selectBackground() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    removeImage('background');
    displayImage('background', event.target)
    var activeBackground = backgroundOptions.querySelector('.active-item');
    removeActiveItem(activeBackground);
    makeActiveItem(event.target);
    newOutfit.background = event.target.value;
  } else {
    removeImage('background');
    event.target.classList.remove('active-item');
    newOutfit.background = null;
  }
};

// Main function that fires when Save button is clicked.
function submitForm(event) {
  event.preventDefault();
  displayOutfitCard();
  saveCardTitle();
  storeOutfit(newOutfit);
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

function clearButtons() {
  var activeButtons = document.querySelectorAll('.active-item');
  for (var i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active-item');
  }
}

function displayOutfitCard() {
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
  savedOutfitsContainer.insertAdjacentHTML('afterbegin',
  `<div class="saved-outfit-card">
    <p>${cardTitle}</p>
    <i class="fas fa-times"></i>
  </div>`)
};

function saveCardTitle() {
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  newOutfit.title = cardTitle;
}

function storeOutfit(outfit) {
  window.localStorage.setItem(outfit.title, JSON.stringify(outfit));
}

Loop through the entire length of the localStorage array,
Grab the key of each item in the array,
Call the getItem method to retrieve each item's data by using our respective localStorage key, 
Turn the data from a string back into an object using JSON.parse,
Push the retrieved object into our saved outfits array!
function getOutfits() {
  for (var i = 0; i < localStorage.length; i++) {
    var outfitKey = localStorage.key([i]);
    var outfit = JSON.parse(window.localStorage.getItem(outfitKey));
    savedOutfits.push(outfit);
  }
}

getOutfits();
