var newOutfit = new Outfit(Date.now(), null, [], null);
var buttonColumn = document.querySelector('.outfit-options-js');
var saveForm = document.querySelector('.save-outfit-form-js');
var saveButton = document.querySelector('.save-outfit-button-js');
var savedOutfitsContainer = document.querySelector('.saved-outfits-container-js');
var savedOutfits = [];
var outfitSearchField = document.querySelector('#outfit-search');

buttonColumn.addEventListener('click', getItem);
saveForm.addEventListener('input', checkFormValidity);
saveForm.addEventListener('submit', submitForm);
savedOutfitsContainer.addEventListener('click', updateCardSection);
outfitSearchField.addEventListener('input', searchOutfit)

getOutfitsFromStorage();
displayLoadedOutfitCards();

function getItem(event) {
  if (event.target.localName === 'button') {
    var displayItem = new DisplayItem(event);
    displayItem.update();
  }
}

function checkFormValidity() {
  saveForm.checkValidity() === true ?
  saveButton.removeAttribute('disabled') :
  saveButton.setAttribute('disabled', '');
}

function submitForm(event) {
  event.preventDefault();
  newOutfit.store();
  newOutfit.reset();
}

function searchOutfit() {
  var savedOutfitCards = Array.prototype.slice.call(
    document.querySelectorAll('.saved-outfit-card'));

  console.log(savedOutfitCards);

  var inputVal = outfitSearchField.value;
  var matches = findMatches(inputVal, savedOutfitCards);

  savedOutfitCards.forEach(card => card.classList.remove('flex'))
  savedOutfitCards.forEach(card => card.classList.add('hidden'))

  matches.forEach(card => card.classList.add('flex'))
  matches.forEach(card => card.classList.remove('hidden'))

  if (outfitSearchField.value.length === 0) {
    savedOutfitCards.forEach(card => card.classList.add('flex'))
    savedOutfitCards.forEach(card => card.classList.remove('hidden'))
  }
}

function findMatches(searchVal, cardsArray) {
  return cardsArray.filter(item => item.innerText.startsWith(`${searchVal}`));
}

function displayNewOutfitCard() {
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card flex" data-id="${newOutfit.id}">
    <p data-id="${newOutfit.id}">${newOutfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`);
}

function displayLoadedOutfitCards() {
  savedOutfits.forEach(outfit => savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card flex" data-id="${outfit.id}">
    <p data-id="${outfit.id}">${outfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`));
}

function getOutfitsFromStorage() {
  var outfitKey = JSON.parse(localStorage.getItem('outfits'));
  if (outfitKey !== null) {
    outfitKey.forEach(outfit => savedOutfits.push(outfit));
  }
}

function updateCardSection() {
  if (event.target.classList.contains('fa-times')) {
    removeSavedCard();
  } else if (event.target !== event.currentTarget) {
    loadOutfitFromCard();
  }
}

function removeSavedCard() {
    var outfitCard = event.target.parentNode;
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    savedOutfits = savedOutfits.filter(outfit => outfit.id.toString() !== outfitCard.dataset.id);
    window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}

function loadOutfitFromCard() {
    newOutfit.reset();

    var loadedOutfit = savedOutfits.find
    (item => item.id.toString() === event.target.dataset.id);

    newOutfit.update(loadedOutfit);
    checkFormValidity();
}
