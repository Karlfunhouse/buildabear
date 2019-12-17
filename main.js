var newOutfit = new Outfit(null, null, [], null);
var hatOptions = document.querySelector('.hat-button-container-js');
var clothesOptions = document.querySelector('.clothes-button-container-js');
var accessoriesOptions = document.querySelector('.accessories-button-container-js');
var backgroundOptions = document.querySelector('.background-button-container-js');

hatOptions.addEventListener('click', selectHat);
clothesOptions.addEventListener('click', selectClothes);
accessoriesOptions.addEventListener('click', selectAccessories);
backgroundOptions.addEventListener('click', selectBackground);

function addActiveItem(item) {
  item.classList.add('active-item');
}

function removeActiveItem(item) {
  if (item != null) {
    item.classList.remove('active-item');
  }
}

function selectHat() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    var activeHat = hatOptions.querySelector('.active-item');
    removeActiveItem(activeHat);
    addActiveItem(event.target);
    if (activeHat != null) {
      newOutfit.removeGarment(activeHat.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
}

function selectClothes() {
  var activeClothes = clothesOptions.querySelector('.active-item');
  removeActiveItem(activeClothes);
  newOutfit.removeGarment(activeClothes);
  if (event.target.classList.contains('vest-js')) {
    newOutfit.addGarment('vest');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('dress-js')) {
    newOutfit.addGarment('dress');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('tuxedo-js')) {
    newOutfit.addGarment('tuxedo');
    addActiveItem(event.target);
  }
}

function selectAccessories() {
  var activeAccessories = accessoriesOptions.querySelector('.active-item');
  removeActiveItem(activeAccessories);
  newOutfit.removeGarment(activeAccessories);
  if (event.target.classList.contains('necklace-js')) {
    newOutfit.addGarment('necklace');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('bowtie-js')) {
    newOutfit.addGarment('bowtie');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('watch-js')) {
    newOutfit.addGarment('watch');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('space-helmet-js')) {
    newOutfit.addGarment('space-helmet');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('earrings-js')) {
    newOutfit.addGarment('earrings');
    addActiveItem(event.target);
  }
}

function selectBackground() {
  var activeBackground = backgroundOptions.querySelector('.active-item');
  removeActiveItem(activeBackground);
  newOutfit.removeGarment(activeBackground);
  if (event.target.classList.contains('sky-js')) {
    newOutfit.addGarment('sky');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('sunset-js')) {
    newOutfit.addGarment('sunset');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('park-js')) {
    newOutfit.addGarment('park');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('beach-js')) {
    newOutfit.addGarment('beach');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('space-js')) {
    newOutfit.addGarment('space');
    addActiveItem(event.target);
  }
};
