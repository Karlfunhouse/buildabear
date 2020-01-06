var newOutfit = new Outfit(Date.now(), null, [], null);
var buttonColumn = document.querySelector('.outfit-options-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];

buttonColumn.addEventListener('click', getButtonValue);
saveForm.addEventListener('input', checkFormValidity);
saveForm.addEventListener('submit', submitForm);
savedOutfitsContainer.addEventListener('click', removeCardFromDisplay);

getOutfitsFromStorage();
displayLoadedOutfits();

function getButtonValue() {
  if (event.target.localName === 'button') {
    var displayItem = new DisplayItem(
      event.target.value, 
      event.target.classList[0]
      );

    displayItem.getItemType(); 
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
  checkFormValidity();
}

function resetPage() {
  saveForm.reset();
  newOutfit = new Outfit(Date.now(), null, [], null);
  displayItems();
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
  newOutfit.title = document.querySelector('.outfit-name-input-js').value;
  savedOutfits.push(outfit);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}

function getOutfitsFromStorage() {
  var outfitKey = JSON.parse(localStorage.getItem('outfits'));
  outfitKey.forEach(outfit => savedOutfits.push(outfit));
}

function removeCardFromDisplay() {
  var outfitCard = event.target.parentNode;
  if (event.target.classList.contains('fa-times')) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    removeCardFromStorage(outfitCard);
  }
}

function removeCardFromStorage(item) {
  savedOutfits = savedOutfits.filter(outfit => outfit.id.toString() !== item.id);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}