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
  }
  removeGarment(garment) {
    var removedItem = this.garments.find(item => item.type === garment.type);
    this.garments = this.garments.filter(item => item.id != removedItem.id);
    garment.imageId.classList.add('hidden');
  }
  addBackground(background) {
    this.background = background;
    background.imageId.classList.remove('hidden');
  }
  removeBackground() {
    this.background.imageId.classList.add('hidden');
    this.background = null;
  }
  changeBackground(newBackground) {
    if (this.background === null) {
      this.background = newBackground;
      newBackground.imageId.classList.remove('hidden');
    } else if (newBackground.id === this.background.id) {
      this.background = null;
      newBackground.imageId.classList.add('hidden');
    } else {
      this.background.imageId.classList.add('hidden');
      this.background = newBackground;
      newBackground.imageId.classList.remove('hidden');
    }
  }
}
