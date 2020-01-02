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
loadOutfitCard();

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

function submitForm(event) {
  event.preventDefault();
  displayOutfitCard();
  saveCardTitle();
  storeOutfit(newOutfit);
  resetPage();
}

function checkFormValid() {
  if (saveForm.checkValidity() === true) {
    saveButton.removeAttribute('disabled');
  }
};

function resetPage() {
  saveForm.reset();
  saveButton.setAttribute('disabled', "");
  var outfitItems = document.querySelectorAll('.image-absolute');
  for (var i = 0; i < outfitItems.length; i++) {
    outfitItems[i].classList.add('hidden');
  }
  newOutfit = new Outfit(Date.now(), null, [], null);
  var activeButtons = document.querySelectorAll('.active-item');
  for (var i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active-item');
  }
}

function displayOutfitCard() {
  var cardId = newOutfit.id;
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" id="${cardId}">
    <p>${cardTitle}</p>
    <i class="fas fa-times"></i>
  </div>`);
};

function loadOutfitCard() {
  for (var i = 0; i < savedOutfits.length; i++) {
    var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
    savedOutfitsContainer.insertAdjacentHTML('beforeend',
    `<div class="saved-outfit-card" id="${savedOutfits[i].id}">
      <p>${savedOutfits[i].title}</p>
      <i class="fas fa-times"></i>
    </div>`);
  }
}

function saveCardTitle() {
  var cardTitle = document.querySelector('.outfit-name-input-js').value;
  newOutfit.title = cardTitle;
}

function storeOutfit(outfit) {
  savedOutfits.push(outfit);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}

function getOutfits() {
  var outfitKey = JSON.parse(localStorage.getItem('outfits'));
  if (outfitKey !== null) {
    savedOutfits = outfitKey;
  }
}

function removeCard() {
  var outfitCard = event.target.parentNode;
  if (event.target.classList.contains('fa-times')) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    clearOutfitCard(outfitCard);
  }
}

function clearOutfitCard(card) {
  savedOutfits = savedOutfits.filter(outfit => outfit.id != card.id);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}