class Outfit {
 constructor (id, title, garments, background) {
  this.id = id;
  this.title = title;
  this.garments = garments;
  this.background = background;
 }

 addGarment(garment) {
  this.garments.push(garment);
  garment.imageId.classList.remove('hidden');
  garment.buttonId.classList.add('active-item');
 }

 removeGarment(garment) {
  var removedItem = this.garments.find(item => item.type === garment.type);
  this.garments = this.garments.filter(item => item.id != removedItem.id);
  garment.imageId.classList.add('hidden');
  garment.buttonId.classList.remove('active-item');
 }

 addBackground(background) {
  this.background = background;
  background.imageId.classList.remove('hidden');
  background.buttonId.classList.add('active-item');
 }

 removeBackground() {
  this.background.buttonId.classList.remove('active-item');
  this.background.imageId.classList.add('hidden');
  this.background = null;
 }

 update(outfit) {
    this.getDOMElements(outfit);

    this.id = outfit.id;
    this.title = outfit.title;
    this.garments = outfit.garments;
    this.background = outfit.background;

    this.garments.forEach(garment => this.addGarment(garment));
    document.querySelector('.outfit-name-input-js').value = `${this.title}`;

    if (outfit.background !== null) {
        this.addBackground(outfit.background);
    }
 }

getDOMElements(outfit) {
    outfit.garments.forEach(item => item.buttonId = document.querySelector(`button[value=${item.id}]`));
    outfit.garments.forEach(item => item.imageId = document.getElementById(`${item.id}`));
  
    if (outfit.background !== null) {
      outfit.background.imageId = document.getElementById(`${outfit.background.id}`);
      outfit.background.buttonId = document.querySelector(`button[value=${outfit.background.id}]`);
    }
}
reset() {
    newOutfit = new Outfit(Date.now(), null, [], null);
    var images = document.querySelectorAll('.image-absolute');
    var activeButtons = document.querySelectorAll('.active-item');
    images.forEach(image => image.classList.add('hidden'))
    activeButtons.forEach(button => button.classList.remove('active-item'));
    saveForm.reset();
    checkFormValidity();
}
storeOutfit() {
    if (savedOutfits.find(outfit => outfit.title === this.title) === undefined) {
        this.storeNewOutfit();
    } else {
        this.updateStoredOutfit();
    }
}
storeNewOutfit() {
    this.title = document.querySelector('.outfit-name-input-js').value;
    savedOutfits.push(this);
    displayNewOutfitCard();
    window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}
updateStoredOutfit() {
    var outfit = savedOutfits.findIndex(outfit => outfit.title === this.title);
    savedOutfits.splice(outfit, 1);
    savedOutfits.push(this);
    window.localStorage.setItem('outfits', JSON.stringify(savedOutfits));
}
}
