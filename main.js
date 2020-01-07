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
savedOutfitsContainer.addEventListener('click', loadOutfitFromCard);
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
  newOutfit = new Outfit(Date.now(), null, [], null);
  var images = document.querySelectorAll('.image-absolute');
  var activeButtons = document.querySelectorAll('.active-item');
  images.forEach(image => image.classList.add('hidden'))
  activeButtons.forEach(button => button.classList.remove('active-item'));
  saveForm.reset();
  checkFormValidity();
}

function displayNewOutfitCard() {
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" data-id="${newOutfit.id}">
    <p data-id="${newOutfit.id}">${newOutfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`);
}

function displayLoadedOutfits() {
  savedOutfits.forEach(outfit => savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card" data-id="${outfit.id}">
    <p data-id="${outfit.id}">${outfit.title}</p>
    <i class="fas fa-times"></i>
  </div>`));
}

function storeOutfit(outfit) {
  outfit.title = document.querySelector('.outfit-name-input-js').value;
  savedOutfits.push(outfit);
  console.log(savedOutfits)
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

function loadOutfitFromCard() {
  if (!event.target.classList.contains('fa-times') && event.target !== event.currentTarget) {
    var loadedOutfit = savedOutfits.find
    (item => item.id.toString() === event.target.dataset.id);

    loadedOutfit.garments.forEach(item => item.imageId = document.getElementById(`${item.id}`));

    // get all the buttons and re-attach them to the display items
    // then, run addGarment on each display item

    console.log(loadedOutfit)
  }
}
