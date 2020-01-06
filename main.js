var newOutfit = new Outfit(Date.now(), null, [], null);
var buttonColumn = document.querySelector('.outfit-options-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];

buttonColumn.addEventListener('click', getItem);
saveForm.addEventListener('input', checkFormValidity);
saveForm.addEventListener('submit', submitForm);
savedOutfitsContainer.addEventListener('click', removeSavedCard);
getOutfitsFromStorage();
displayLoadedOutfits();

function getItem(event) {
  if (event.target.localName === 'button') {
    var displayItem = new DisplayItem(event);
    displayItem.update();
  }
}

function checkFormValidity() {
  saveForm.checkValidity() === true ?
  saveButton.removeAttribute('disabled') : saveButton.setAttribute('disabled', '');
}

function submitForm(event) {
  event.preventDefault();
  storeOutfit(newOutfit);
  displayNewOutfitCard();
  resetPage();
}

function resetPage() {
  saveForm.reset();
  checkFormValidity();
  newOutfit.reset();
}

function displayNewOutfitCard() {
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" id="${newOutfit.id}">
    <p>${newOutfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`);
}

function displayLoadedOutfits() {
  savedOutfits.forEach(outfit => savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" id="${outfit.id}">
    <p>${outfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`));
}

function storeOutfit(outfit) {
  outfit.title = document.querySelector('.outfit-name-input-js').value;
  savedOutfits.push(outfit);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}

function getOutfitsFromStorage() {
  var outfitKey = JSON.parse(localStorage.getItem('outfits'));
  outfitKey.forEach(outfit => savedOutfits.push(outfit));
}

function removeSavedCard() {
  if (event.target.classList.contains('fa-times')) {
    var outfitCard = event.target.parentNode;
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    savedOutfits = savedOutfits.filter(outfit => outfit.id.toString() !== outfitCard.id);
    window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
  }
}
