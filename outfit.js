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
  reset() {
    this.garments.forEach(garment => garment.imageId.classList.add('hidden'));
    this.garments.forEach(garment => garment.buttonId.classList.remove('active-item'));
    this.removeBackground();
  }
}
