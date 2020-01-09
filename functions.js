function displayLoadedOutfitCards() {
  savedOutfits.forEach(outfit => savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card flex card-slide" data-id="${outfit.id}">
      <p data-id="${outfit.id}">${outfit.title}</p>
      <i class="fas fa-times"></i>
  </div>`));
  }

function displayNewOutfitCard() {
  savedOutfitsContainer.insertAdjacentHTML('beforeend',
  `<div class="saved-outfit-card flex card-slide" data-id="${newOutfit.id}">
      <p data-id="${newOutfit.id}">${newOutfit.title}</p>
      <i class="fas fa-times"></i>
  </div>`);
  }

function findMatches(searchVal, cardsArray) {
  return cardsArray.filter(item => item.innerText.startsWith(`${searchVal}`));
  }

function getOutfitsFromStorage() {
  var outfitKey = JSON.parse(localStorage.getItem('outfits'));
  if (outfitKey !== null) {
      outfitKey.forEach(outfit => savedOutfits.push(outfit));
  }
}

function loadOutfitFromCard() {
  newOutfit.reset();

  var loadedOutfit = savedOutfits.find
  (item => item.id.toString() === event.target.dataset.id);

  newOutfit.update(loadedOutfit);
  checkFormValidity();
}

function removeSavedCard() {
  var outfitCard = event.target.parentNode;
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  savedOutfits = savedOutfits.filter(outfit => outfit.id.toString() !== outfitCard.dataset.id);
  window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}

function resetSearchField(arrayItems) {
  if (!outfitSearchField.value.length) {
    arrayItems.forEach(card => card.classList.add('flex'))
    arrayItems.forEach(card => card.classList.remove('hidden'))
  }
}

function toggleBanner() {
    var banner = document.querySelector('.no-saved-outfits-banner')
    if (savedOutfitsContainer.children.length === 0) {
      banner.classList.remove('hidden');
    } else if (!banner.classList.contains('hidden')) {
      banner.classList.add('hidden');
    }
  }