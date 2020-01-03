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
}

function selectBackground() {
  if (event.target != event.currentTarget && event.target.classList.contains('active-item')) {
    newOutfit.background = null;
  } else if (event.target !== event.currentTarget) {
    newOutfit.background = event.target.value;
  }
  displayActiveButtons();
  displayImages();
}

function submitForm(event) {
  event.preventDefault();
  saveCardTitle();
  displayOutfitCard();
  storeOutfit(newOutfit);
  resetPage();
}

function checkFormValid() {
  if (saveForm.checkValidity() === true) {
    saveButton.removeAttribute('disabled');
  }
}

function resetPage() {
  var outfitItems = document.querySelectorAll('.image-absolute');
  var activeButtons = document.querySelectorAll('.active-item');
  outfitItems.forEach(item => item.classList.add('hidden'));
  activeButtons.forEach(button => button.classList.remove('active-item'));
  saveForm.reset();
  saveButton.setAttribute('disabled', "");
  newOutfit = new Outfit(Date.now(), null, [], null);
}

function displayOutfitCard() {
  var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" id="${newOutfit.id}">
    <p>${newOutfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`);
}

function loadOutfitCard() {
var savedOutfitsContainer = document.querySelector('.saved-outfits-container');
savedOutfits.forEach(outfit => savedOutfitsContainer.insertAdjacentHTML('beforeend',
`<div class="saved-outfit-card" id="${outfit.id}">
  <p>${outfit.title}</p>
  <i class="fas fa-times"></i>
</div>`))
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