var newOutfit = new Outfit(Date.now(), null, [], null);
var buttonColumn = document.querySelector('.outfit-options-js');
var outfitSearchField = document.querySelector('#outfit-search');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsColumn = document.querySelector('.saved-outfits-js')
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];

buttonColumn.addEventListener('click', getItem);
saveForm.addEventListener('input', checkFormValidity);
saveForm.addEventListener('submit', submitForm);
savedOutfitsColumn.addEventListener('click', closeBanner);
savedOutfitsContainer.addEventListener('click', updateCardSection);
outfitSearchField.addEventListener('input', searchOutfit);

getOutfitsFromStorage();
displayLoadedOutfitCards();
toggleBanner();

function getItem(event) {
  if (event.target.localName === 'button') {
    var displayItem = new DisplayItem(event);
    displayItem.update();
  }
};

function checkFormValidity() {
  saveForm.checkValidity() === true ?
  saveButton.removeAttribute('disabled') :
  saveButton.setAttribute('disabled', '');
};

function submitForm(event) {
  event.preventDefault();
  newOutfit.store();
  newOutfit.reset();
  toggleBanner();
};

function closeBanner() {
  var banner = document.querySelector('.no-saved-outfits-banner');
  if (event.target.classList.contains('no-outfit-close')) {
    banner.classList.add('hidden');
  }
};

function updateCardSection() {
  if (event.target.classList.contains('fa-times')) {
    removeSavedCard();
  } else if (event.target !== event.currentTarget) {
    loadOutfitFromCard();
  }
};

function searchOutfit() {
  var savedOutfitCards = Array.prototype.slice.call(
    document.querySelectorAll('.saved-outfit-card'));
  var inputVal = outfitSearchField.value;
  var matches = findMatches(inputVal, savedOutfitCards);
  savedOutfitCards.forEach(card => card.classList.remove('flex'));
  savedOutfitCards.forEach(card => card.classList.add('hidden'));
  matches.forEach(card => card.classList.add('flex'));
  matches.forEach(card => card.classList.remove('hidden'));
  resetSearchField(savedOutfitCards);
};