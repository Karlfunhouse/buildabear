var newOutfit = new Outfit(Date.now(), null, [], null);
var buttonColumn = document.querySelector('.outfit-options-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];

buttonColumn.addEventListener('click', selectItems);
buttonColumn.addEventListener('click', displayItems);
saveForm.addEventListener('input', checkFormValidity);
saveForm.addEventListener('submit', submitForm);
savedOutfitsContainer.addEventListener('click', removeCardFromDisplay);

getOutfitsFromStorage();
displayLoadedOutfits();

function selectItems(event) {
  if (event.target.classList[0] === 'background') {
    newOutfit.changeBackground(event.target.id);
  } else if (event.target.classList.contains('active-item') && event.toElement.nodeName === 'BUTTON') {
    newOutfit.removeGarment(event.target.classList[0]);
  } else if (event.toElement.nodeName === 'BUTTON') {
    newOutfit.removeGarment(event.target.classList[0]);
    newOutfit.addGarment({id: event.target.id, type: event.target.classList[0]});
  }
}

function displayItems() {
  var domItems = Array.prototype.slice.call(document.querySelectorAll('.js-data'));
  var outfitItems = newOutfit.garments.map(garment => garment.id);
  outfitItems.push(newOutfit.background);
  var domMatches = domItems.filter(item => outfitItems.find(outfitItem => outfitItem === item.id));
  domItems.forEach(item => item.localName === 'img' ? 
  item.classList.add('hidden') : item.classList.remove('active-item'));
  domMatches.forEach(item => item.localName === 'img' ? 
  item.classList.remove('hidden') : item.classList.add('active-item'));
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