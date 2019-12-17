var newOutfit = new Outfit(null, null, [], null);
var hatOptions = document.querySelector('.hat-options-js');
var clothesOptions = document.querySelector('.clothes-options-js');
var accessoriesOptions = document.querySelector('.accessories-options-js');
var backgroundOptions = document.querySelector('.background-options-js');
console.log(newOutfit);

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
  var activeHat = hatOptions.querySelector('.active-item');
  removeActiveItem(activeHat);
  newOutfit.removeGarment(activeHat);
  if (event.target.classList.contains('top-hat-js')) {
    newOutfit.addGarment('top-hat');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('sun-hat-js')) {
    newOutfit.addGarment('sun-hat');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('bow-js')) {
    newOutfit.addGarment('bow');
    addActiveItem(event.target);
  } else if (event.target.classList.contains('crown-js')) {
    newOutfit.addGarment('crown');
    addActiveItem(event.target);
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
