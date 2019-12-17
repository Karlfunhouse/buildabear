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

function displayImage(imageType, imageId) {
  var imageTypeArray = document.querySelectorAll(`.image-${imageType}`);
    for (var i = 0; i < imageTypeArray.length; i++) {
      if (imageId.value == imageTypeArray[i].id) {
        imageTypeArray[i].classList.remove('hidden');
      }
    }
}

function selectHat() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    displayImage('hats', event.target)
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
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    displayImage('clothes', event.target)
    var activeClothes = clothesOptions.querySelector('.active-item');
    removeActiveItem(activeClothes);
    addActiveItem(event.target);
    if (activeClothes != null) {
      newOutfit.removeGarment(activeClothes.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
}

function selectAccessories() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    displayImage('accessories', event.target)
    var activeAccessories = accessoriesOptions.querySelector('.active-item');
    removeActiveItem(activeAccessories);
    addActiveItem(event.target);
    if (activeAccessories != null) {
      newOutfit.removeGarment(activeAccessories.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
}

function selectBackground() {
  if (event.target != event.currentTarget && !event.target.classList.contains('active-item')) {
    displayImage('background', event.target)
    var activeBackground = backgroundOptions.querySelector('.active-item');
    removeActiveItem(activeBackground);
    addActiveItem(event.target);
    if (activeBackground != null) {
      newOutfit.removeGarment(activeBackground.value);
    }
    newOutfit.addGarment(event.target.value);
  } else {
    event.target.classList.remove('active-item');
    newOutfit.removeGarment(event.target.value);
  }
};
