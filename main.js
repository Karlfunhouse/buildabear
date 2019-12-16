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
  console.log('poop1');
}
function selectClothes() {
  console.log('poop2');
}
function selectAccessories() {
  console.log('poop3');
}
function selectBackground() {
  console.log('poop4');
};
