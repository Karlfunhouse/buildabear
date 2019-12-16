var newOutfit = new Outfit(null, null, null, null);
var hatOptions = document.querySelector('.hat-options-js');
var clothesOptions = document.querySelector('.clothes-options-js');
var accessoriesOptions = document.querySelector('.accessories-options-js');
var backgroundOptions = document.querySelector('.background-options-js');
console.log(newOutfit);

hatOptions.addEventListener('click', selectHat);
clothesOptions.addEventListener('click', selectClothes);
accessoriesOptions.addEventListener('click', selectAccessories);
backgroundOptions.addEventListener('click', selectBackground);

function selectHat() {
  if (event.target.classList.contains('top-hat-js')) {
    console.log('tophat');
  } else if (event.target.classList.contains('sun-hat-js')) {
    console.log('sunhat');
  } else if (event.target.classList.contains('bow-js')) {
    console.log('bow');
  } else if (event.target.classList.contains('crown-js')) {
    console.log('crown');
  }
}

function selectClothes() {
  if (event.target.classList.contains('vest-js')) {
    console.log('vest');
  } else if (event.target.classList.contains('dress-js')) {
    console.log('dress');
  } else if (event.target.classList.contains('tuxedo-js')) {
    console.log('tuxedo');
  }
}

function selectAccessories() {
  if (event.target.classList.contains('top-hat-js')) {
    console.log('tophat');
  } else if (event.target.classList.contains('sun-hat-js')) {
    console.log('sunhat');
  } else if (event.target.classList.contains('bow-js')) {
    console.log('bow');
  } else if (event.target.classList.contains('crown-js')) {
    console.log('crown');
  }
}

function selectBackground() {
  if (event.target.classList.contains('top-hat-js')) {
    console.log('tophat');
  } else if (event.target.classList.contains('sun-hat-js')) {
    console.log('sunhat');
  } else if (event.target.classList.contains('bow-js')) {
    console.log('bow');
  } else if (event.target.classList.contains('crown-js')) {
    console.log('crown');
  }
};
